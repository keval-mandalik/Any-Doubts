import React from 'react';
import QuoraBox from './QuoraBox';
import Post from './Post';
import './MainFeed.css';
const MainFeed = () => {
  return (
    <div className='feed'>
      <QuoraBox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default MainFeed
