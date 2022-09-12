import React from 'react'
import QuestionSidebar from './QuestionSidebar'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import MainFeed from '../Feed/MainFeed'

function Answer() {
  return (
    <div className='quora'>
      <Nav />
      <div className='quora__contents'>
        <div className='quora__content'>
          <QuestionSidebar />
          <MainFeed />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Answer
