import React from 'react'
import QuestionSidebar from './QuestionSidebar'
import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import AnswerFeed from './AnswerFeed'

function Answer() {
  return (
    <div className='quora'>
      <Nav />
      <div className='quora__contents'>
        <div className='quora__content'>
          <QuestionSidebar />
          <AnswerFeed />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Answer
