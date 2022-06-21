import React,{useState} from 'react'
import Create_post from './Create_post';

function Post_box() {
  const [display , setdisplay] = useState(false);
const setoff = () => {
  setdisplay(false)

}
  

  return (
    <>
   
   {
        display === true ? <Create_post setoff={setoff} display={display} /> : ""
     
  } 
     
      
      <div className="Post-card w-full h-28  flex items-center ... flex-col  rounded-md bg-white pt-4 pb-1 mb-2">

        <div className="post-sec-1 h-1/2 w-full  flex items-center justify-between p-4">
          <a href="#" className="profile-img">
            <div className='w-10'>
              <img className="rounded-full ..." src="https://media-exp1.licdn.com/dms/image/C5603AQEwh0JGj9ZVGw/profile-displayphoto-shrink_800_800/0/1626856698991?e=1659571200&v=beta&t=v70BmaKMbE2mfwE9_kq3laIHGE-ygqj1cowiF3-O8Z0" alt="" />
            </div>
          </a>

          <button className='w-96 border border-slate-400 h-10  rounded-3xl flex items-center pl-4 hover:bg-gray-200 ...'  onClick={() => setdisplay(true)}>
            <span>Start a post</span>
          </button>
        </div>

        <div className="post-sec-2 h-1/2 w-full pt-1 pl-3 pr-3 flex  justify-between ">
          

          <button className='flex items-center h-10   gap-2 p-1 rounded hover:bg-slate-200 ... '>
            <div className='text-sky-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
            </div>

            <span>Photos</span>
          </button>

          <button className='flex items-center h-10 gap-2 p-1 rounded hover:bg-slate-200 ...'>
            <div className='text-sky-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
            </div>

            <span>Video</span>
          </button>

          <button className='flex items-center h-10  gap-2 p-1 rounded hover:bg-slate-200 ...'>
            <div className='text-sky-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
            </div>

            <span>Event</span>
          </button>

          <button className='flex items-center h-10 gap-2 p-1 rounded hover:bg-slate-200 ...'>
            <div className='text-sky-500'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
            </div>

            <span>Write arctical</span>
          </button>

        </div>
      </div>
    </>
  )
}

export default Post_box