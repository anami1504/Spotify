import React from 'react'
import Home from './Home';
import Sidenav from './Sidenav';

function Dashboard() {
  return (
    <div style={{display:"flex",backgroundColor:"black"}}>
        <Sidenav/>
        <Home/>
    </div>
  )
}

export default Dashboard