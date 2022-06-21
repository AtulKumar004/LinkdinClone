import React,{useState, useEffect} from 'react'
import { database } from '../../../firebase';
import MessagePost from './Message box/MessagePost';
import { globalContext } from '../../../context/ContextProvider';
function Create_post({ display, setoff}) {
    const [loading ,setloading] = useState(true);
    const [message , setMessage] = useState("");
    const { postData, setPostdata } = React.useContext(globalContext);
    // console.log(postData);
    const [name , setName] = useState("Atul kumar"); // for just now
    const [user, setUser] = useState("44WGNtNjAMS61y4comS7tKsYPcW2");
    const [profileImg, setProfilimg] = useState("https://media-exp1.licdn.com/dms/image/C5603AQEwh0JGj9ZVGw/profile-displayphoto-shrink_800_800/0/1626856698991?e=1659571200&v=beta&t=v70BmaKMbE2mfwE9_kq3laIHGE-ygqj1cowiF3-O8Z0");
    console.log("context " , React.useContext(globalContext))
    // Contet APi

   

    const messagePost = async() =>{
        let res = await database.Message_data.add({
            name, profileImg,  user , message    
        })
        setPostdata([...postData, { name, profileImg, message }])
        setoff();
    }


    // fetch data 


    



    return (

        <div className="createPostCont h-auto w-2/6 bg-gray-200 absolute top-8 mb-24 left-15 z-10 flex flex-col p-2 rounded ...">
            <div className="Post_head w-full h-14  flex justify-between p-4 items-center">
                <h1>Create a Post</h1>
                <button className="rounded-full h-9 w-9 flex items-center justify-center ..." onClick={() => setoff()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                    </svg>
                    </button>

            </div>

            <div className="profile-sec w-full h-20  flex items-center justify-start pl-4">
                <div className="profile-sec-1 profile w-11 h-11 rounded-full bg-green-500  ...">
                    <img className="rounded-full" src={profileImg} alt=""  />
                </div>

                <div className="profile-sec-2 flex flex-col w-28 pl-2">
                    <div className="Name text-lg">Atul kumar</div>
                    <button className='w-28 border border-slate-400 h-8 bg-gray-200  rounded-3xl flex items-center justify-between p-1'>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                        </svg>

                        Anyone
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                            <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                        </svg>

                    </button>
                </div>



            </div>

            {/* Text area */}

            <textarea className="messagePost-area w-full h-auto bg-inherit outline-none p-2 text-base " value={message} placeholder='What do you want to talk about?' onChange ={(e) => setMessage(e.target.value)} />

            <div className="post_submit  w-full flex items-center h-20 justify-end pr-5 ">
                <button className='w-20  h-10  rounded-3xl flex items-center justify-center bg-gray-100 font-bold text-gray-300'  onClick = {messagePost} > Post</button>
                
                </div> 


            
        </div>

        

    )
}

export default Create_post
