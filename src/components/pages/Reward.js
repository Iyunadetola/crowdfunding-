import React, {useState} from 'react'
import close from '../../images/icon-close-modal.svg'
import '../../components/navbar/Navbar.css'

const Reward = ({reward, setReward}) => {
   
    function hide(){
        let x = document.querySelector('.toggleContinue')
        x.classList.toggle('active')
    }
    // let [hide, setHide] = useState(false)
    function hidden(){
        let y = document.querySelector('.toggleContinueThree')
        y.classList.toggle('active')
    }
    function hideOne(){
        let z = document.querySelector('.toggleContinueOne')
        z.classList.toggle('active')
    }

  return (
    <div className='reward-container' >
        <div className='back-close' >
            <h4>Back this project</h4>
            <img className='close' src={close} alt='' onClick={()=>{
                setReward(false);
            }} />
        </div>

        <div className='support' >
        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>

        <div>
        <form>
            <div className='first' >
                <label>
                    <input type='checkbox' onClick={()=>{
                        hideOne();
                        console.log('clicked')
                    }}  />
                    <button  >Pledge with no reward</button>
                </label>
                    <h6>Choose to support us without reward if you simply believe in our ptoject. As a backer, you will be bsigned up to receive products updates by email.
                    </h6> 
                    <div className='toggleContinueOne'>
                    <h4>Thanks for your support!</h4>
                    <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    <button  className='bamcont'>Continue</button>
                    </div>

                    
            </div> 


            <div className='second' >
                <label>
                    
                        <div  className='bsp'>
                        <input type='checkbox' onClick={()=>{
                    
                        console.log('clicked')
                        hide()
                        }} /> <button className='bs'  >Bamboo Stand</button>
                            <button className='pm'  >Pledge $25 or more </button>
                            <p className='num' > <b> 101 </b><small>left</small></p>
                        </div>


                </label>
                    <h6>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list.
                    </h6> 
                    <div className='toggleContinue'>
                        <hr></hr>
                        <div className='continueP' >
                            <div><input type="text" placeholder='Enter your pledge'/></div>
                            <div className='bambut' ><button className='twentyfive' > $ 25 </button> <button  className='bamcont'>Continue</button> </div>
                        </div>
                    </div>

                    

            </div>

            <div className='third' >
                <label>
                <div  className='bsp'>
                        <input type='checkbox' onClick={()=>{
                           hidden();
                           console.log('click')
                        }} /> <p className='bs' >Black Edition</p>
                            <button className='pms' >Pledge $75 or more </button>
                            <p className='nummm' > <b> 64 </b><small>left</small></p>
                        </div>
                </label>
                <h6>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. 
                </h6> 

                <div className='toggleContinueThree'>
                        <hr></hr>
                        <div className='continueP' >
                            <div><input type="text" placeholder='Enter your pledge'/></div>
                            <div className='bambut' ><button className='twentyfive' > $ 75 </button> <button  className='bamcont'>Continue</button> </div>
                        </div>
                    </div>
            </div>

            <div className='fourth' >
                <label>

                <div  className='bspp'>
                        <input type='checkbox' /> <p className='bs' >Mahogany Special Edition</p>
                            <button className='pmm' >Pledge $200 or more </button>
                            <p className='numm' > <b> 0 </b><small>left</small></p>
                        </div>
                </label>
                <h6>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
                </h6> 
            </div>

             
            </form>
        </div>
    </div>
  )
}

export default Reward