import React from 'react'
import WidgetContent from './WidgetContent'
import "./Widget.css"

function widget() {
  return (
    <div className='Widget'>
      <div className='Widget__Header'>
        <h5>Spaces to Follow</h5>
      </div>
      <div className='Widget__Contents'>
        <WidgetContent />
      </div>
    </div>
  )
}

export default widget
