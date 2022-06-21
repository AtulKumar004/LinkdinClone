import React from 'react'

function Bodypage() {
    return (
        <>
            <div className="Bode_cont w-full h-fit flex  pl-40 pt-16 ">
                <div className="leftside w-1/2 flex  flex-col gap-20">
                    <h1 className='text-6xl text-orange-800 font-extralight'>Welcome to your<br /> professional <br /> community</h1>
                    <div className="special_link">

                        <div className="features hover:shadow-md h-16 w-3/6 bg-white rounded-md border-2 border-gray-300 flex justify-between pl-4 pr-4 items-center mb-3">

                            <a href="#" className="links  h-4/5  text-xl flex items-center " >Search for a job</a>
                            <span class="material-symbols-outlined text-4xl">
                                chevron_right
                            </span>




                        </div>

                        <div className="features h-16 w-3/6 hover:shadow-md bg-white rounded-md border-2 border-gray-300 flex justify-between pl-4 pr-4 items-center mb-3">

                            <a href="#" className="links  h-4/5  text-xl flex items-center " >Find a person you know</a>
                            <span class="material-symbols-outlined text-4xl">
                                chevron_right
                            </span>




                        </div>

                        <div className="features h-16 w-3/6 bg-white hover:shadow-md  rounded-md border-2 border-gray-300 flex justify-between pl-4 pr-4 items-center mb-3">

                            <a href="#" className="links  h-4/5  text-xl flex items-center " >Learn a new skill</a>
                            <span class="material-symbols-outlined text-4xl">
                                chevron_right
                            </span>




                        </div>

                        

                    </div>

                </div>

                <div className="rightside w-1/2 ">

                    <img src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg" alt="" />

                </div>

            </div>


        </>
    )
}

export default Bodypage