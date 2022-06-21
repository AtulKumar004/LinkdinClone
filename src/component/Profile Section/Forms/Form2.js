import React, { useState } from 'react'
import { globalContext } from '../../../context/ContextProvider';

function Form2() {
    const { form2display, setForm2display } = React.useContext(globalContext);
    return (
        <>
            <div className="form2 w-1/2 h-4/5 bg-white top-12  absolute left-96 rounded-xl overflow-auto z-30" style={{ display: form2display == true ? "" : "none" }}>
                <div className="head flex justify-between pl-6 h-8  items-center pr-6 pt-2 mb-2">
                    <div>
                        <h1 className="text-2xl">Add education</h1>
                    </div>
                    <button className="rounded-full h-9 w-9 flex items-center justify-center hover:bg-gray-200 ..." onClick={() => setForm2display(false)} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                        </svg>
                    </button>

                </div>

                <hr className="w-full mb-5"></hr>

                <div className="form_content pl-6 h-auto overflow-auto mb-4">

                    <label htmlFor="School"> School</label><br />
                    <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />
                    <label htmlFor="Degree"> Degree</label><br />
                    <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />

                    <label htmlFor=""> Field of study</label><br />
                    <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />

                 



                   
                    <label htmlFor="Start date">Start date</label><br/>
                    <div className='space-x-3 flex w-full '>
                        <input className='fName border border-gray-400 h-8 mb-5 pl-2 text-l' placeholder='Month' style={{width : "285px"} }/>

                        <input className='fName border  border-gray-400 w-2/5  h-8 mb-5 pl-2 text-l ' placeholder='Year' />
                    </div>

                    <label htmlFor="End date(or expected)">End date(or expected) </label><br />
                    <div className='space-x-3 flex w-full '>
                        <input className='fName border border-gray-400 h-8 mb-5 pl-2 text-l' placeholder='Month' style={{ width: "285px" }} />

                        <input className='fName border  border-gray-400 w-2/5  h-8 mb-5 pl-2 text-l ' placeholder='Year' />
                    </div>


                    <label htmlFor="Grade"> Grade </label><br />
                    <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />

                    <label htmlFor="Descreption"> Descreption</label><br />
                    <textarea name="Descreption" className='w-4/5 h-24 border border-gray-400 '></textarea>

                   




                </div>

                <hr className="w-full mb-5"></hr> 

                 <div className='w-full h-12 flex  items-center justify-end pr-5'>
                    <button className='w-24 h-9 rounded-full text-white font-300 bg-sky-300'>save</button>
                </div>

            </div>

        </>
    )
}

export default Form2