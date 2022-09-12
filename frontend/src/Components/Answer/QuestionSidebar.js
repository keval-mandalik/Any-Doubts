import React from 'react'
import "./QuestionSidebar.css"

function QuestionSidebar() {
    return (
        <div className="qSidebar">
            <div className='qSidebarOptions'>
                <div className="qHeader">
                    <p>Questions</p>
                </div>
                <hr />
                <div className='qSidebarOption'>
                    <p>Questions For You</p>
                </div>

                <div className='qSidebarOption'>
                    <p>Your Questions</p>
                </div>

                <div className='qSidebarOption'>
                    <p>Your Answers</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionSidebar
