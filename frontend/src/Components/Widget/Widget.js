import React from 'react'
import WidgetContent from './WidgetContent'
import "./Widget.css"

function widget() {
  return (
    <div className='Widget'>
      <div className='Widget__Header'>
        <h6>Spaces to Follow</h6>
      </div>
      <div className='Widget__Contents'>
        <WidgetContent />
        <WidgetContent />
        <WidgetContent />
      </div>
    </div>
  )
}

export default widget
