import React,{useState} from 'react'
import './Navbar.css'
import { useNavigate,Link } from 'react-router-dom';

function Navbar() {
    const [display , setdisplay] = useState(false);
    const navigate = useNavigate();
    const gotoViewProfole = () =>{
        navigate("/view_profile");
    }
    


    const Logout = async () => {

        let res = await auth.signOut();


    } 

    return (
        <>
       
            <header className='navbar '>
                <div className='nav-feature'>
                    <a href='#'>
                        <div className='nav-logo'>
                            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img>
                        </div>


                    </a>
                    <div className='global-nav-search'>
                        <div className='global-nav-typed'>
                            <input className='global-search-typed' placeholder='Search' />
                            {/* <div className='search-icon'>
                                <span class="material-symbols-outlined">
                                    search
                                </span>


                            </div> */}

                        </div>

                    </div>

                    <nav className='global-sub-navbar'>
                        <ul className='sub-navbar-features'>
                            {/* Home */}
                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    
                                    <div className='sub-navbar-item-logo'>
                                        <span className="material-symbols-outlined">
                                            home
                                        </span>


                                    </div>

                                    <Link to = "/home"> <span tital="Home">Home</span> </Link>
                                </a>
                            </li>

                            {/* My Network */}

                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span className="material-symbols-outlined">
                                            group
                                        </span>




                                    </div>
                                    <span tital="My-Network">My Network</span>
                                </a>
                            </li>

                            {/* Work */}

                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span className="material-symbols-outlined">
                                            work
                                        </span>


                                    </div>
                                    <span tital="Home">Work</span>
                                </a>
                            </li>

                            {/* Messages */}

                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span className="material-symbols-outlined">
                                            mail
                                        </span>


                                    </div>
                                    <span tital="Home">Messaging</span>
                                </a>
                            </li>
                            {/* notifications*/}


                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='sub-navbar-item-logo'>
                                        <span className="material-symbols-outlined">
                                            notifications
                                        </span>


                                    </div>
                                    <span tital="Home">Notification</span>
                                </a>
                            </li>


                            <li className='sub-navbar-item'>
                                <a href='#' target='_self' >
                                    <div className='profile-img'>
                                        <img src = "https://media-exp1.licdn.com/dms/image/C5603AQEwh0JGj9ZVGw/profile-displayphoto-shrink_800_800/0/1626856698991?e=1659571200&v=beta&t=v70BmaKMbE2mfwE9_kq3laIHGE-ygqj1cowiF3-O8Z0" />
                                    </div>
                                    <div className='Profile'>
                                        <span >Me</span>

                                        
                                        <span className="material-symbols-outlined" onClick={() => setdisplay(!display)}>
                                            arrow_drop_down
                                        </span>


                                    </div>


                                </a>
                            </li>

                        </ul>

                    </nav>


                </div>
            </header>
            

            <div className="HomeProfileoptionDOwn shadow-xl rounded-lg h-auto bg-white absolute z-40  top-16 flex-col" style={{width : "260px" , right : "24rem", display : display == true ? "" : "none"} }>
                <div className='w-full flex   p-2 flex-col'>
                    <div className='flex mb-2 '>
                        <div className="profileIng ">
                            <img className="w-32  rounded-full  bg-blue-200" src="https://media-exp1.licdn.com/dms/image/C5603AQEwh0JGj9ZVGw/profile-displayphoto-shrink_800_800/0/1626856698991?e=1659571200&v=beta&t=v70BmaKMbE2mfwE9_kq3laIHGE-ygqj1cowiF3-O8Z0" alt="" />

                        </div>
                        <div className='pl-2'>
                            <p className='text-lg font-normal'>Atul kumar</p>
                            <p className='text-base  text-gray-700 font-light'>Pursuing B tech from Maharaja Agrasan institute of technology</p>
                        </div>

                    </div>

                    <button className='h-7 w-full rounded-full border mb-2 border-sky-400 hover:border-2'  onClick={gotoViewProfole}>View Profile</button>
                    <button className='h-7 w-full rounded-full border border-sky-400 hover:border-2  ' onClick={Logout}>Logout</button>
                    


                </div>
            </div>

                        
            
        </>
    )
}

export default Navbar