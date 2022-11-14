import React from 'react'
import "./Widget__Content.css"
import { Link } from 'react-router-dom'

function WidgetContent(props) {
  return (
    <a href={`//${props.to}`} target="_blank">
      <div className='Widget__Contents'>
        <div className='Widget__Content'>
            <img src={props.url} alt="Logo" />

            <div className='Widget__ContentTitle'>
                <h6>{props.title}</h6>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
    </a>
    )
}

export default WidgetContent
