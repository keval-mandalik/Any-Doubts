import React from 'react'
import './sidebar.css'
import { AiFillHtml5 } from "react-icons/ai"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { AiOutlineDatabase } from "react-icons/ai"
import { AiOutlineSecurityScan } from "react-icons/ai"
import { AiFillChrome } from "react-icons/ai"

export default function SidebarOptions(props) {
    
    function CatChanger(e , category){
        props.changeCategory(category)
        // console.log(category)
    }
    
    return (
        <div className='sidebarOptions'>
            <button className='sidebarOption' onClick={(e) => CatChanger(e, "Frontend")}>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiFillHtml5 />
                <p>Front-End Doubts</p>
            </button>
            <button className='sidebarOption' onClick={(e) => CatChanger(e, "Backend")}>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiOutlineConsoleSql />
                <p>Backend Doubts</p>
            </button>
            <button className='sidebarOption' onClick={(e) => CatChanger(e, "DataScience")}>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiOutlineDatabase />    
                <p>Data Science Doubts</p>
            </button>
            <button className='sidebarOption' onClick={(e) => CatChanger(e, "CyberS")}>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiOutlineSecurityScan />
                <p>Cyber Security Doubts</p>
            </button>
            <button className='sidebarOption' onClick={(e) => CatChanger(e, "AIML")}>
                {/* <img src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" alt="IMAGE" /> */}
                <AiFillChrome />
                <p>AI and ML Doubts</p>
            </button>
        </div>
    )
}
