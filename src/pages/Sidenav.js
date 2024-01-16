import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { VscLibrary } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import './sidenav.css'

function Sidenav() {
  return (
    <div className="sideNav">
        <div className="sidenav-links">
            <div className="sidenav-logo">
                <FaSpotify className='sidenav-logo-icons' />
                <p className="sidenav-text"> Spotify</p>
            </div>
            <div className="sidenav-link">
                <MdHomeFilled className='sidenav-link-icons' />  
                <p className="sidenav-text">Home</p>
            </div>
            <div className="sidenav-link">
                <IoSearch className='sidenav-link-icons' />
                <p className="sidenav-text">Search</p>
            </div>
        
        </div>

        <div className="sidenav-content">
            <div className="library">
                <div className="library-sub">
                <VscLibrary className="library-icon"/>
                <Link to='' className="library-link">Your library</Link>
                </div>
                
                <Link to='' className="library-link"><FaPlus /></Link>
            </div>
    

        <div className='create-playlist'>
            <div><h4>Create your playlist</h4></div>
            <div className='des-text'>It is easy,we'll help you</div>
            <button className='sidenav-btn'>Create playlist</button>
        </div>

        <div className='podcasts'>
            <div><h4>Let's find some podcasts to follow</h4></div>
            <div className='des-text'>We'll keep you updated on new episodes</div>
            <button className='sidenav-btn'>Browse podcasts</button>
        </div>

        <div className="privacy">
            <div className="privacy-sub">
                <Link to='' className="privacy-links">Legal</Link>
                <Link to='' className="privacy-links">Privacy Center</Link>
                <Link to='' className="privacy-links">Privacy Policies</Link>
                <Link to='' className="privacy-links">Cookies</Link>
            </div>
            <div className="privacy-sub">
                <Link to='' className="privacy-links">About Ads</Link>
                <Link to='' className="privacy-links">Accessibility</Link>
            </div>
            <div className="privacy-sub">
                <Link to='' className="privacy-links">Cookies</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidenav