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
          <p>Spaces You might like</p> 
        </div>

        <Space />
        <Space />
        <Space />
        <Space />
        <Space />

      </div>
    </div>
  )
}

export default Discover

