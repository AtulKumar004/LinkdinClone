// rfce => react functional component
import React from 'react'
import './Container.css'
import LeftSide from './LeftSide/LeftSide'
import RightSide from './RightSide/RightSide'
import MainSlider from './MainSlider/MainSlider'

function Container() {
    return (
        <>
            <div className='container '>
                <div className='main-container pt-6'>
                    <LeftSide />
                    <MainSlider />
                    <RightSide />
                </div>



            </div>
        </>
    )
}

export default Container