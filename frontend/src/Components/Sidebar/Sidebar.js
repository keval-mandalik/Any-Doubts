import React from 'react'
import SidebarOptions from './SidebarOptions'
import './sidebar.css'

export default function Sidebar(props) {

    // props.changeCategory("Testing..")

    return (
        <div className='sidebar'>
              <SidebarOptions changeCategory = {props.changeCategory}/>
        </div>
    )
}
