
import './LeftSide.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




function LeftSide() {

    return (
        <>
            <div className='Leftside-area-main'>
                <Card sx={{ maxWidth: 245 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="30"
                            image="https://res.cloudinary.com/dhom0bqjf/image/upload/v1654346225/cld-sample.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" align="center">
                                Atul kumar
                            </Typography>
                            <Typography variant="body2" color="text.secondary" align="center">
                                Pursuing B tech from Maharaja Agrasan institute of technology
                            </Typography>
                        </CardContent>

                            
                    </CardActionArea>

                    <CardActionArea>
                        <Typography className = 'profile-view'  gutterBottom  component="div"  paddingLeft={1} >
                            <Typography  variant="body2" component="div" align = "left" >
                                Who's viewed your profile
                            </Typography>
                            <Typography  variant="body2" component="div" align="right" paddingLeft = {5}  >
                             3
                           </Typography>
                        </Typography>

                        <Typography className = 'profile-view'  gutterBottom  component="div"  paddingLeft={1} >
                            <Typography  variant="body2" component="div" align = "left" >
                                Impression of your post 
                            </Typography>
                            <Typography  variant="body2" component="div" align="right" paddingLeft = {5}  >
                              1
                           </Typography>
                        </Typography>
                    </CardActionArea>

                </Card>

                <card sx={{ maxWidth: 245 }}>

                </card>
            </div>
        </>
    )
}

export default LeftSide