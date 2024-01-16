import React from 'react'
import { FaSpotify } from "react-icons/fa";
import './login.css'
import { Link } from 'react-router-dom'
import google from '../images/google.png'
import facebook from '../images/facebook.png'
import apple from '../images/apple.png'

function Login() {
  return (
    <div className="loginBody" >
        <div className="loginNav">
            <FaSpotify style={{fontSize:"40px",color:"white"}} /><h2 className="spotify">Spotify</h2>
        </div>
        <div className="formDiv">
            <div className="formInner">
                <div className='login-text'>
                <h1>Log in to Spotify</h1>
                </div>
                
                
                <button className='continue-btn'><img src={google} alt='google image' height="20px" width="20px"></img><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Continue with Google</button>
                <button className='continue-btn'><img src={facebook} alt='google image' height="20px" width="20px"></img><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Continue with Facebook</button>
                <button className='continue-btn'><img src={apple} alt='google image' height="20px" width="20px"></img><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Continue with Apple</button>
                <button className='continue-btn'>Continue with Phone number</button>
                <hr  style={{width:"100%",border: "0.03px solid #292929",height:"0.05px"}}/>
                <form action='/home'>
                    <label className='login-label'>Email or username</label>
                    <input type="text" placeholder='Email or username' className='login-text-box' required></input><br/>
                    <label className='login-label'>Password</label><br/>
                    <input type="password" placeholder='Password' className='login-text-box' required></input><br/>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                    <label className="remember-me-label">Remeber me</label><br/>
                    
                        <button className='login-btn'>Log In</button><br/>
                </form>
                
                <Link  className="forgot-pass"to='/'>Forgot your password?</Link>
                <div className='line'><hr  style={{width:"100%",border: "0.03px solid #292929",height:"0.05px"}}/></div>
                
                <br/>

            </div>
            

        </div>


    </div>
  )
}

export default Login