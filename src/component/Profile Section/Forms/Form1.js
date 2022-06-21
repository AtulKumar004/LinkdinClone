import React,{useState} from 'react'
import { globalContext } from '../../../context/ContextProvider';
import Form2 from './Form2';

function Form1() {
    const { formdisplay, setFormdisplay } = React.useContext(globalContext);
    const { form2display, setForm2display } = React.useContext(globalContext);
    return (
        <>
        <div className="form1 w-1/2 h-4/5 bg-white top-12  absolute left-96 rounded-xl overflow-auto z-30"  style={{display : formdisplay == true ? "" : "none"}}>
            <div className="head flex justify-between pl-6 items-center pr-6 pt-2 mb-2">
                <div>
                    <h1 className="text-2xl">Edit intro</h1>
                </div>
                <button className="rounded-full h-9 w-9 flex items-center justify-center hover:bg-gray-200 ..."  onClick={() => setFormdisplay(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
                    </svg>
                </button>

            </div>

            <hr className="w-full mb-5"></hr>
            <div className="form_content pl-6">

                <label htmlFor="First Name"> First Name</label><br />
                <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />
                <label htmlFor="Last Name"> Last Name</label><br />
                <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />

                <label htmlFor="Headline"> Headline</label><br />
                <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />

                <h1 className='text-2xl mb-2'>Current Position</h1>

                <button className='hover:bg-sky-200 p-1 rounded text-sky-400'> + Add new position</button>

                <h1 className='text-2xl mb-2'>Education</h1>

                <button className='hover:bg-sky-200 p-1 rounded text-sky-400' onClick = {() => setForm2display(true)}> + Add new education</button>

                <h1 className='text-2xl mb-2'>Education</h1>
                <label htmlFor="Country/Region"> Country/Region</label><br />
                <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />
                <label htmlFor="City"> City </label><br />
                <input className='fName border border-gray-400 w-4/5 h-8 mb-5 ' /><br />




            </div>


        </div>

        {
                form2display == true ? <Form2/> : ""
        }
            
        </>
    )
}

export default Form1