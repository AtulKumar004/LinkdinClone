import { fromJSON } from 'postcss'
import React from 'react'
import Typography from '@mui/material/Typography';

function MessagePost({data }) {

    console.log("message box")
    const img_btn = () => {
        console.log("cliked");
    }
    return (
        <div className='main_message_conatiner w-full mb-4   bg-white '>
            
            <div className="profile-sec w-full h-20  flex items-center justify-start pl-4">
                <div className="profile-sec-1 profile w-11 h-11 rounded-full   ...">
                    <img className="rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQEwh0JGj9ZVGw/profile-displayphoto-shrink_800_800/0/1626856698991?e=1659571200&v=beta&t=v70BmaKMbE2mfwE9_kq3laIHGE-ygqj1cowiF3-O8Z0" alt="" />
                </div>

                <div className="profile-sec-2 flex flex-col w-full pl-2">
                    <h1 className="Name">{data.name}</h1>
                    <Typography className="text-xs text-gray-500" variant="body-2">
                        Pursuing B tech in Maharaha Agrasen Institute of Technology
                    </Typography>


                </div>




            </div>

            <div className='h-auto w-auto  p-4 '>
                {/* bcvc */}
                <span className=''>
                   {data.message}
                    
                </span>
            </div>

            <div className="img_post_area mb-2">
                <button className='w-full' onClick={img_btn}>
                    <img src="https://media-exp2.licdn.com/dms/image/C4D22AQGbSYSO9SFBng/feedshare-shrink_2048_1536/0/1653551548153?e=1657756800&v=beta&t=nw6z1f0imz8l4qcVoTtcEOwU_PxB2XiYQoHxue3ksO8" alt="" />
                </button>
            </div>

            <hr className='w-full h-px pt-2 border-gray-300' />
             <div className="like_share_comment_cnt w-full h-8 text-xs        text-gray-400 flex justify-between p-2">
                <span>You and 15 other</span>
                <span>3 comment</span>
            </div>


            <div className="post-sec-2 h-1/2 w-full pt-1 pl-3 pr-3 flex  justify-between ">


                <button className='flex items-center h-10   gap-2 p-1 rounded hover:bg-slate-200 ... '>
                    <div className='text-gray-400'>
                        {/* <img src="https://static-exp1.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e" alt="" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                        </svg>
                    </div>

                    <span>Likes</span>
                </button>

                <button className='flex items-center h-10 gap-2 p-1 rounded hover:bg-slate-200 ...'>
                    <div className='text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                        </svg>
                    </div>

                    <span>Comments</span>
                </button>

                <button className='flex items-center h-10  gap-2 p-1 rounded hover:bg-slate-200 ...'>
                    <div className='text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                        </svg>
                    </div>

                    <span>Share</span>
                </button>

                <button className='flex items-center h-10 gap-2 p-1 rounded hover:bg-slate-200 ...'>
                    <div className='text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                        </svg>
                    </div>

                    <span>Send</span>
                </button>

            </div>





        </div>
    )
}

export default MessagePost