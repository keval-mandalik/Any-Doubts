import React from 'react'
import MainFeed from './Components/Feed/MainFeed'
import Sidebar from './Components/Sidebar/Sidebar'
import Widget from './Components/Widget/Widget'
import Nav from './Components/Nav/nav'
import "./Quora.css"

function Quora() {
  return (
    <div className='quora'>
        <Nav/>
        <div className='quora__contents'>
            <div className='quora__content'>
                <Sidebar/>
                <MainFeed/>
                <Widget />
            </div>
        </div>
    </div>
  )
}

export default Quora
