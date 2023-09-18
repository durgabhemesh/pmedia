import React from 'react'
import './Header.css'
import img from '../Images/A2.jpg'

const Header = () => {
   
  return (
    <div className='header'>
<div className='title'>
     <img className='Mainlogo' src={img}></img>
    <h4  className='pm'> Placement's Media</h4>
    
    </div>
    {/* <p style={{width: '40%',fontSize: '11px', display: 'flex',justifyContent:'center',alignContent:'center',alignItems:'center',margin:'auto',paddingLeft:'20px'}}>Building Trust and Careers...</p> */}

   
        
    </div>

  )
}

export default Header