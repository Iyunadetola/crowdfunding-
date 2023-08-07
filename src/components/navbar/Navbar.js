import React , {useState} from 'react'
import logo from '../../images/logo-mastercraft.svg'
import bg from '../../images/image-hero-desktop.jpg'
import bgMobile from '../../images/image-hero-mobile.jpg'
import './Navbar.css';
import news from '../../images/image-hero-mobile.jpg'
import bookmark from '../../images/icon-bookmark.svg'
import {Link} from 'react-router-dom'
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Alert } from '@mui/material';
import check from '../../images/icon-check.svg'
import Pledge from '../Pledge';
import Reward from '../pages/Reward';
import close from '../../images/icon-close-modal.svg'



const Navbar = () => {

  let [state, setState] = useState(false)
  let [display, setDisplay] = useState(false)
  let [reward, setReward] = useState(false)
  let [navOpen, setNavOpen] = useState(false)

  let container = document.querySelector('.conta')

  

  function toggle(){
    setState(!state)
  };
  function blurr(){
    let blur = document.getElementById('blur');
      blur.classList.toggle('active')
    }


 


  
  

  return (
    <div className='cont'  >
      <div className='conta' id='blur' >
          <div className='bg-img' >
            <img className='desktop' src={bg} alt='' />
            <div className='ml' >
            
            </div>
        

          </div>
            <div className='nav' >
              <div className='logo'>
              <h3><li><Link to="/">Crowdfund</Link></li></h3>
              </div>
              <div className='list'  >
                <ul className='ull' >
                
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/discover">Discover</Link></li>
                  <li><Link to="/getStarted">GetStarted</Link></li>
                </ul>
              </div>
            
            </div>

            <div className='mobile' >
              <div id='mySideNav' className='sideNav'>
                <img className='bgImage' src={bgMobile} alt="" />
                <div className='bgWord' ><h3 Link to='/' >Crowdfund</h3></div>
                <div className='bgImg' ><img className='closeImg' src={close}  onClick={()=>{
                  console.log('click'); setNavOpen(!navOpen)
                }} alt=''/></div>



                
              </div>

              {navOpen && <ul>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/discover">Discover</Link></li>
                  <li><Link to="/getStarted">GetStarted</Link></li>
                </ul> }
            </div>

            <div className='herosection' >
              <div className='first' >
                <div className='hero1' >
                <img className='m-logo' src={logo} alt='' />
              
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <p>A beautiful & handcrafted monitor stand to reduce neck and eye  strain</p>
                </div>

                <div className='bookmark-btns' >
                  <div className='back-btn' >
                    <button className='back-pro' >Back to this project</button>
                  </div>

                  <div className='ic-bk' >
                      <img className='icon-b' src={bookmark} alt='' />  
                      < button className={'bookmark' + (state ? 'bookmarked': '')} onClick={toggle}  >  {state ? 'bookmarked' : 'bookmark'}</button>
                  </div>
                </div>
              </div>
              <div className='hero-amount' >
                <div className='amount' >
                  <div className='am' >
                    <h5>$89,914</h5>
                    <p>of $100,000 backed</p>
                  </div>
                  <div className='vert-line' >
                    <hr/>
                  </div>

                  <div className='amo' >
                    
                    <h5>5,007</h5>
                    <p>total backers</p>
                  </div>
                  <div className='vert-line' >
                    <hr/>
                  </div>


                  <div className='amou' >
                    <h5>56</h5>
                    <p>days left</p>
                  </div>
                  
                </div>
                <progress className='file' value={80} max={100} >80%</progress>
              </div>
              <div className='hero-about' >
                <div className='about' >
                  <h6>About this project</h6>
                  <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                </div>

                <div className='hero-bamboo' >
                  <div className='bamboo-pledge' >
                    <h6 className='bamboo' >
                    Bamboo Stand
                    </h6>
                    <button className={'pledge'} onClick={()=>{
                      setDisplay(true), blurr();
                      
            
                      
                    }} >
                    
                    Pledge $25 or more 
                    </button>
                  </div>
                  <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. </p>
                  <div className='hundred-reward' >
                    <h5>101 <small>left</small> </h5> 
                    <button onClick={()=>{
                      setReward(true), blurr();
                    }} className='selectReward'>Select Reward</button>
                  </div>
                </div>

                <div className='hero-black' >
                  <div className='black-pledge' >
                    <h6 className='black' >
                    Black Edition Stand
                    </h6>
                    <button className='pledgee' onClick={()=>{
                      setDisplay(true), blurr();
                      console.log('clicked')
                      
            
                      
                    }}  >
                    Pledge $75 or more 
                    </button>
                  </div>
                  <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. </p>
                  <div className='sixty-reward' >
                    <h5 >64 <small>left</small> </h5>
                    <button onClick={()=>{
                      console.log('clicked')
                      setReward(true);
                    }} >Select Reward</button>
                  </div>
                </div>

                <div className='hero-m' >
                  <div className='hero-mahogany' >
                    <div className='mahogany-pledge' >
                      <h6 className='mahogany' >
                      Mahogany Special Edition
                      </h6>
                      <button className='plege' >
                      Pledge $200 or more 
                      </button>
                    </div >
                    <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.  </p>
                    <div className='zero-stock' >
                      <h5>0 <small>left</small> </h5>
                      <button>Out of stock</button>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
            {/* <div className='mobile' >
              <div id='mySideNav' className='sideNav' >
                <img className='' src={close} alt='' onClick={closeNav} />

                <ul>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/discover">Discover</Link></li>
                  <li><Link to="/getStarted">GetStarted</Link></li>
                </ul>
              </div>
              <h3 Link to='/' >Crowdfund</h3>
            </div> */}
            
      
      </div>
      {display && <Pledge display={display} setDisplay={setDisplay} /> }
      {reward  && <Reward reward={reward} setReward={setReward}/>  }


     


      </div>
    
  )
}

export default Navbar