import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Container from './Container'


function Maincontainer() {
  return (
    <>
   

              <Navbar />
          
              <Container />
        
    
    </>
    
  )
}

export default Maincontainer