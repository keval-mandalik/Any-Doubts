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
        <WidgetContent to="https://developer.android.com/" url = "https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?crop=16:9" title="App Development" desc="Ask The experts of App Development"/>
        <WidgetContent to="https://www.udemy.com/courses/development/web-development/" url = "https://futureskillsprime.in//sites/default/files/2021-04/web-development.jpg" title="Web Development" desc="Ask The experts of Web Development"/>
        <WidgetContent to="https://www.coursera.org/articles/blockchain-developer" url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KGUla1P-UfakUjB9-vvm5-aCvLLk_74jBg&usqp=CAU" title="Blockchain Developer" desc="Ask the experts of Blockchain Development"/>
        </div>
    </div>
  )
}

export default widget
