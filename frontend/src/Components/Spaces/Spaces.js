import React from 'react'
import Nav from '../Nav/Nav'
import QuestionSidebar from '../Answer/QuestionSidebar'
import MainFeed from '../Feed/MainFeed'
import Widget from '../Widget/Widget'
import AllSpaces from './AllSpaces'

function Spaces() {
  return (
    <div className='quora'>
      <Nav />
      <div className='quora__contents'>
        <div className='quora__content'>
          <AllSpaces />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Spaces
