import React from 'react'
import { Avatar } from '@material-ui/core'
import './QuoraBox.css';
const QuoraBox = () => {
  return (
    <div className='quoraBox'>
      <div className="quoraBox__info">
        <Avatar/>
      </div>
      <div className="quoraBox__quora">
        <h5>What is Your Question/Link?</h5>
      </div>
    </div>
  )
}

export default QuoraBox
