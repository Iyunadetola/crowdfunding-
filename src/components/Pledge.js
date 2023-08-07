import React from 'react'
import check from '../images/icon-check.svg'
import logo from '../images/logo-mastercraft.svg'
import bg from '../images/image-hero-desktop.jpg'
import bookmark from '../images/icon-bookmark.svg'
import {Link} from 'react-router-dom'
import './navbar/Navbar.css';

const Pledge = ({display, setDisplay}) => {

  let container = document.querySelector('.conta')


  return (
    <div >
                <div className='pledge-box' >
                <img className='check' src={check} alt='' />
                <h1>Thanks for your support!</h1>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <button onClick={()=>{
                  setDisplay(false);
                  // container.style.opacity ='none'

                }} >Got it!</button>
                </div>


    </div>
  )
}

export default Pledge