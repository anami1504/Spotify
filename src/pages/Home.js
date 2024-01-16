import React from 'react'
import './home.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import flowerImg from '../images/flower.jpg'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";


function Home() {
  return (
    <div>
    
    <div className="homeDiv">

        <div className="homeNav">
            <div className="arrow">
                <Link to=''><IoIosArrowBack style={{color:"white",paddingRight:"28px"}}/></Link>
                <Link to=''><IoIosArrowForward style={{color:"white"}}/></Link>

             </div>
             <div>
                <button className="homeSignupBt">Sign up</button>
                <button className="homeLoginBt">Log in</button>
            </div>
        
        </div>

        <div className="albumDiv">
            <h2 style={{paddingLeft:"35px"}}>Spotify playlist</h2>
            <div className="albums">
                <div className="album" style={{marginLeft:"10px"}}>
                    <div>
                        <img src={flowerImg} className="img" alt="flower" height="180px" />
                        <h4>Lofi beats</h4>
                        <p className="quotes">chill beats, lofi vibes, new tracks every week...</p>
                    </div>
                </div>

                <div className="album">
                    <div>
                        <img src={flowerImg} className="img" alt="flower" height="180px" />
                        <h4>Today's Top Hits</h4>
                        <p className="quotes">Ariana Grande is on top of the Hottest 50!</p>
                    </div>
                </div>

                <div className="album">
                    <div>
                        <img src={flowerImg} className="img" alt="flower" height="180px" />
                        <h4>Chillout Lounge</h4>
                        <p className="quotes">Just lean back and enjoy relaxed beats.</p>
                    </div>
                </div>

                <div className="album">
                    <div>
                        <img src={flowerImg} className="img" alt="flower" height="180px" />
                        <h4>All Out 2020s</h4>
                        <p className="quotes">The biggest songs of the 2020s</p>
                    </div>
                </div>

                <div className="album">
                    <div>
                        <img src={flowerImg} className="img" alt="flower" height="180px" />
                        <h4>Jazz Background</h4>
                        <p className="quotes">Soft instrumental Jazz for all your activities.</p>
                    </div>
                </div>

            </div>

        </div>

        <div className="homeFooter">
            <div className='homeFooterSub'>
                <div className="footerDiv">
                    <h4>Company</h4>
                    <Link to='' className="homeLink">About</Link><br/>
                    <Link to='' className="homeLink">Jobs</Link><br/>
                    <Link to='' className="homeLink">For the Record</Link><br/>

                </div>
                <div className="footerDiv">
                    <h4>Communities</h4>
                    <Link to='' className="homeLink">For Artists</Link><br/>
                    <Link to='' className="homeLink">Developers</Link><br/>
                    <Link to='' className="homeLink">Advertising</Link><br/>
                    <Link to='' className="homeLink">Investors</Link><br/>
                    <Link to='' className="homeLink">Vendors</Link><br/>
                </div>
                <div className="footerDiv">
                    <h4>Useful link</h4>
                    <Link to='' className="homeLink">Support</Link><br/>
                    <Link to='' className="homeLink">Free Mobile APP</Link><br/>
                    
                </div>
            </div>
            <div className="footerIcon">
                <div className="iconDiv">
                    <Link to='' className="icon"><FaInstagram /></Link>
                </div>
                <div className="iconDiv">
                    <Link to='' className="icon"><FaTwitter /></Link>
                </div>
                <div className="iconDiv">
                    <Link to='' className="icon"><FaFacebook /></Link>
                </div>

            </div>
            
        </div>
        <hr  style={{width:"90%",border: "0.03px solid #292929",height:"0.05px"}}/>
        <div className="copyright">
            <p><FaRegCopyright />2024 Spotify AB</p>
        </div>
    </div>
    </div>
  )
}

export default Home