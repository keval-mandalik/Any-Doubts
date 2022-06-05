import React from 'react'
import './sidebar.css'
import { AiFillHtml5 } from "react-icons/ai"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { AiOutlineDatabase } from "react-icons/ai"
import { AiOutlineSecurityScan } from "react-icons/ai"
import { AiFillChrome } from "react-icons/ai"

export default function SidebarOptions(props) {
    return (
        <div className='sidebarOptions'>
            <div className='sidebarOption'>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiFillHtml5 />
                <p>Front-End Doubts</p>
            </div>
            <div className='sidebarOption'>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiOutlineConsoleSql />
                <p>Backend Doubts</p>
            </div>
            <div className='sidebarOption'>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiOutlineDatabase />    
                <p>Data Science Doubts</p>
            </div>
            <div className='sidebarOption'>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiOutlineSecurityScan />
                <p>Cyber Security Doubts</p>
            </div>
            <div className='sidebarOption'>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiFillChrome />
                <p>AI and ML Doubts</p>
            </div>
        </div>
    )
}
