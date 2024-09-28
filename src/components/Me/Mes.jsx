import React from 'react'
import './Me.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Me = () => {
  return (
    
        <div  id='home' className='Me'>
          <img src={profile_img} alt="my" />
          <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
          <p>I am a frontend developer from California, USA with 10 year</p>
           <div className="Me-action">
             <div className="Me-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
             <div className="Me-resume">My resume</div>
           </div>
       </div>
   
  )
}

export default Me