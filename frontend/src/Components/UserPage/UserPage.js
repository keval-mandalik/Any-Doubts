import React from 'react'
import Nav from '../Nav/Nav'
import "./UserPage.css"

function UserPage() {
  return (
    <div className='cont'>
        <Nav />

        <div className="userPage">
          <div className="userProfile">
            Profile
          </div>

          <div className="userDetails">
            Details
          </div>
        </div>
    </div>
  )
}

export default UserPage
