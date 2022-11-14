import React from 'react'
import "./Space.css"

function Space(props) {
    return (

        <>
        <div className='space'>
            <div className='space-image'>
                <img src={props.url} alt="Image" />
            </div>

            <div className='space-info'>
                <div className='space-head'>{props.name}</div>
                <div className='space-subscribers'>{props.follower} followers</div>
                <div className='space-details'>{props.desc}</div>
            </div>

        </div>

        <hr />

        </>
    )
}

export default Space
