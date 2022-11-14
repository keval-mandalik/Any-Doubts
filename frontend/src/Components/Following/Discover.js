import React from 'react'
import Space from './Space'
import "./Discover.css"

function Discover() {
  return (
    <div className="discover">
      <div className='discover-head'>
        <p>Discover Spaces</p>
      </div>

      <div className='discover-body'>
        <div className='discover-body-head'>
          <p>Spaces You Follow</p> 
        </div>

        <Space url = "https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png" name="MS Excel" follower="200" desc="Learn Everything About Ms Excel"/>
        <Space url = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/2086px-Microsoft_Word_2013-2019_logo.svg.png" name="MS Word" follower="500" desc="Learn Everything About MS Word"/>
        <Space url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/640px-Adobe_Photoshop_CC_icon.svg.png" name="Adobe PS" follower="100" desc="Learn Everything About Adobe Ps"/>
        <Space url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" name="Python Coding" follower="120" desc="Learn Everything About Python Coding"/>
        <Space url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZ2NW6oWjMQqZ5J6yMkh-loBiHNIOaRDg4-FuWrs&s" name="Data Structure" follower="320" desc="Learn Everything About Data Structure"/>
        
      </div>
    </div>
  )
}

export default Discover

