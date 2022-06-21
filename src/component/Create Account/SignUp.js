import React, { useState, useEffect } from 'react'
import {auth} from "../../firebase"

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  const [user , setUser] = useState("");

  const signUp = async() =>{
    let res = await database.Profile_Data.add({
      email , Fname , Lname
    })
    auth.createUserWithEmailAndPassword(email , password);
    

  }

  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) => setUser(user));
    // console.log("User : ", user.email);
    return () => {
      unsub();
    };
  }, [user]);





  return (
    <>


      <div className='flex justify-center items-center w-full bg-gray-200 h-full'>
        


        <div className="login_page_cont w-1/4 h-fit bg-white flex flex-col p-4 items-start pl-4 rounded shadow-2xl"  >
          <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" className='w-28 mb-6' alt="" />
          <h1 className='text-4xl flex  mb-2'> Sign in</h1>
          <label htmlFor="Email" className='text-sm text-gray-600 font-extralight mb-1'> Email</label>
          <input type="text" className='h-10 w-80 rounded-md mb-2 border border-3 outline-hidden ' value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="Password" className='text-sm text-gray-600 font-extralight mb-1'> Password</label>
          <input type="Password" className='h-10 rounded-md w-80 mb-5 border border-3 outline-hidden' value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className='text-gray-400 text-sm mb-3 w-80'>By clicking Agree & Join , you agree to the Linkedin <span className='text-sky-400'>User Agreement, Privacy policy, </span> and <span className='text-sky-400'>Cokkie Policy</span></p>
          <button className="login_btn w-80 bg-sky-500 h-10 rounded-full hover:bg-sky-600 text-white font-600 mb-3" onClick={(display) => display = display + 1} >Agree & Join </button>

          <hr className='w-full h-px pt-2 border-gray-300' />
          <span className='text-sky-400 mt-4'>Already on Linkdin ?  Sign in </span>


        </div>






        <div className="login_page_cont w-1/4 h-fit bg-white flex flex-col p-4 items-start pl-4 rounded shadow-2xl">
          <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" className='w-28 mb-6' alt="" />

          <label htmlFor="First name" className='text-sm text-gray-600 font-extralight mb-1' > First name</label>
          <input type="text" className='h-10 w-80 rounded-md mb-2 border border-3 outline-hidden ' value={Fname} onChange={(e) => setFName(e.target.value)}  />
          <label htmlFor="Last name" className='text-sm text-gray-600 font-extralight mb-1' value={Lname} onChange={(e) => setLName(e.target.value)}> Last name</label>
          <input type="text" className='h-10 rounded-md w-80 mb-5 border border-3 outline-hidden' />

          <button className="login_btn w-80 bg-sky-500 h-10 rounded-full hover:bg-sky-600 text-white font-600 mb-3"  >Continue </button>


        </div>





        <div className="login_page_cont w-1/4 h-fit bg-white flex flex-col p-4 items-start pl-4 rounded shadow-2xl" >
          <h1 className='text-2xl pl-24 mb-5'>Welcome , {Fname}!</h1>
          <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" className='w-28 mb-6' alt="" />

          <label htmlFor="Countrt/Region" className='text-sm text-gray-600 font-extralight mb-1'>Countrt/Region </label>
          <input type="text" className='h-10 w-80 rounded-md mb-2 border border-3 outline-hidden ' />
          <label htmlFor="City/Distict" className='text-sm text-gray-600 font-extralight mb-1'> City/District</label>
          <input type="text" className='h-10 rounded-md w-80 mb-5 border border-3 outline-hidden' />

          <button className="login_btn w-80 bg-sky-500 h-10 rounded-full hover:bg-sky-600 text-white font-600 mb-3" onClick={signUp}> Next </button>


        </div>



        












      </div>

    </>
  )
}

export default SignUp