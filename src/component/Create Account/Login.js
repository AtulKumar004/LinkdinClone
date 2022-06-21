import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { auth } from '../../firebase';
import Container from '../Body/Container';
import {globalContext} from "../../context/ContextProvider"
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log((globalContext))
  const {user , setUser} = useContext(globalContext)
  // const { postData,  setPostdata } = React.useContext(globalContext);
  // console.log(user);
  // const [user, setUser] = useState(null);
  const navigate  = useNavigate();
  const Login = async () => {
    let res = await auth.signInWithEmailAndPassword(email, password);
    console.log("User : ", res.user.uid);
  }
  const Logout = async () => {

    let res = await auth.signOut();
    

  }

  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) => setUser(user));
    // console.log("User : ", user);
    return () => {
      unsub();
    };
  }, []);




  return (
    <>

      {
        user === null ?


          <div className='flex justify-center items-center w-full bg-gray-200 h-full'>

            <div className="login_page_cont w-1/5 h-fit bg-white flex flex-col p-4 items-start pl-4 rounded shadow-2xl">
              <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" className='w-28 mb-6' alt="" />
              <h1 className='text-4xl flex  mb-2'> Sign in</h1>
              <label htmlFor="Email" className='text-sm text-gray-600 font-extralight mb-1'> Email</label>
              <input type="text" className='h-10 w-64 rounded-md mb-2 border border-3 outline-hidden ' value={email} onChange= {(e) => setEmail(e.target.value)} />
              <label htmlFor="Password" className='text-sm text-gray-600 font-extralight mb-1'> Password</label>
              <input type="Password" className='h-10 rounded-md w-64 mb-5 border border-3 outline-hidden' value={password} onChange = {(e) => setPassword(e.target.value)} />
              <button className='text-sky-400 text-md mb-8'>Forget Password</button>
              <button className="login_btn w-64 bg-sky-500 h-10 rounded-full hover:bg-sky-600 text-white font-600 mb-3" onClick={Login}>Login</button>

              <hr className='w-full h-px pt-2 border-gray-300' />
              <span className='text-sky-400 mt-4'>New to Linkdin ?  Join Now </span>


            </div>

          </div>
          :
          <>
          {
          navigate("/home") }

          </>


    }


    </>
  )
}

export default Login