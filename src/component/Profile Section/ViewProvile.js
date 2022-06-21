import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import Form1 from './Forms/Form1';
import { globalContext } from '../../context/ContextProvider';

function ViewProfile() {
    const {formdisplay  , setFormdisplay} = React.useContext(globalContext);
    const formtrigger = () => {
        setFormdisplay(true);
    }
    
    return (
        <>
        <div className="body_cont w-full h-full flex justify-center">
            <div className='main_cont w-1/2 h-full bg-red-200   absolute top-16'>
                <Card className='w-full p-4 z-10 '>
                    <CardMedia
                        component="img"
                        className='h-52'
                        image="https://png.pngtree.com/thumb_back/fh260/background/20190827/pngtree-random-energy-wave-background-image_307670.jpg"
                        alt="green iguana"
                    />
                    <div className="profile_img w-28 h-28 rounded-full absolute top-40 left-10 z-20  ">

                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEwh0JGj9ZVGw/profile-displayphoto-shrink_800_800/0/1626856698991?e=1659571200&v=beta&t=v70BmaKMbE2mfwE9_kq3laIHGE-ygqj1cowiF3-O8Z0" className='w-28 h-28 rounded-full' alt="" />

                    </div>
                    <CardContent className='mt-10'>
                        <Typography gutterBottom variant="h5" component="div" className='pl-2'>
                            Atul kumar 
                        </Typography>
                        <Typography variant="body2" className='pl-2' color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            
                        </Typography>

                        <Typography variant="body2" className='pl-2' color="text.secondary">
                            Delhi,India

                        </Typography>
                    </CardContent>
                    <div>
                        <button   className = "rounded-full text-white w-20 bg-sky-300 ">Open to</button>
                        {/* <button  className="text-white bg-sky-300 rounded-full w-40 ml-3"></button> */}
                        <button className='h-7 w-40 rounded-full border mb-2 border-sky-400 hover:border-2 ml-3' >Add profile section</button>
                        <button className='h-7 w-20 rounded-full border mb-2 border-sky-400 hover:border-2 ml-3' >about</button>
                        {/* <button className='w-20 text-white bg-sky-300 rounded-full ml-3'>about</button> */}
                    </div>
                    <button onClick={formtrigger}  >
                        <span class="material-symbols-outlined w-9 h-9 absolute top-64 right-10 flex justify-center items-center  hover:bg-gray-200 rounded-full">
                            edit
                        </span>
                    </button>
                    


                </Card>

               


            </div>

        </div>
        {
        formdisplay == true ? <Form1/> : ""
        }
            </>
        

    )
}

export default ViewProfile