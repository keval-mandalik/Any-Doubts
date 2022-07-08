import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Widget from '../Widget/Widget'
import Nav from '../Nav/Nav'
import Discover from './Discover'
import "./Following.css"


function List() {
  return (
    <div className='quora'>
      <Nav />
      <div className='quora__contents'>
        <div className='quora__content'>
          <Sidebar />
          <Discover />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default List
