
// import './MainSlider.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Post_box from './Post_box';
import MessageBoxCont from './Message box/MessageBoxCont';


function MainSlider() {
    return (
        <>
            <div className='Mainside-area-main w-2/5  '>
                <Post_box/>
                <hr className='w-full h-px pt-2 border-gray-300'/>
                {/* <MessageBoxCont/> */}
                <MessageBoxCont/>
                
                
            </div>
        </>
    )
}

export default MainSlider