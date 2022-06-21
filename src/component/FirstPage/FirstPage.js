import React from 'react'
import { Link } from "react-router-dom";
import Bodypage from './Bodypage';

function FirstPage() {
    return (
        <>

            {/* Navbar */}

            <header className='Firstpage_cont w-full h-20  flex items-center justify-center '>
                <div className="Firstpage_navbar w-4/5 h-auto bg-white flex items-center justify-between pl-4 pr-4">
                    <div className="logo w-28  ">
                        <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="" />
                    </div>

                    <div className="subNavbar">

                        <ul className='sub-navbar-features'>
                            {/* Home */}
                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span class="material-symbols-outlined">
                                            explore
                                        </span>




                                    </div>
                                    <span tital="Home">Discover</span>
                                </a>
                            </li>

                            {/* My Network */}

                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span class="material-symbols-outlined">
                                            supervisor_account
                                        </span>






                                    </div>
                                    <span tital="My-Network">People</span>
                                </a>
                            </li>

                            {/* Work */}

                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span class="material-symbols-outlined">
                                            smart_display
                                        </span>




                                    </div>
                                    <span tital="Home">Learninr</span>
                                </a>
                            </li>

                            {/* Messages */}

                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span class="material-symbols-outlined">
                                            work
                                        </span>


                                    </div>
                                    <span tital="Home">Jobs</span>
                                </a>
                            </li>
                            {/* notifications*/}


                            


                            <div class="verticalLine border-l-2 h-4/6 border-gray-300">
                                
                            </div>

                            <div className="account_function pl-4 h-full flex gap-3 items-center">
                                <button className="login_btn w-28 h-4/5 rounded-full hover:bg-gray-200">
                                    <Link to="/signup">Join now</Link>   
                                </button>

                                <button className="login_btn w-28 border-2 text-blue-500 border-blue-500 h-4/5  rounded-full  ">
                                    <Link to="/login">Sign in</Link>  
                                </button>

                            </div>

                        </ul>

                        


                    </div>

                </div>


            </header>
            <Bodypage/>



        </>
    )
}

export default FirstPage