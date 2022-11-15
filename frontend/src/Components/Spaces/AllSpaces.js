import React from 'react'
import "./AllSpaces.css"
import Space from './Space'

function AllSpaces() {
    return (
        <div className='cont'>
            <div className="spacesHeader">
                <h5 style={{ color: "white" }}>Welcome to Spaces !!</h5>
                <p>Follow Spaces to explore your interest on AnyDoubts</p>

                <button> Create a Space </button>
                <button> Discover Spaces </button>
            </div>


            <div className="space-discover">
                <div className='space-discover-head'>
                    <p>Discover Spaces</p>
                </div>

                <div className='space-discover-body'>
                    <div className='space-discover-body-head'>
                        <p>Spaces You Might Like</p>
                    </div>

                </div>
            </div>

            <div className="allspaces">
                <Space url="https://interviewpreparation.quora.com/2" src="https://i0.wp.com/www.seekho.ai/blog/wp-content/uploads/2022/05/5-Reasons-Your-Job-Interview-Didnt-Land-You-the-Job.png?fit=900%2C500&ssl=1" name="Interview Preparation" desc="Guidance on Interview Preparation and Job Search" />
                <Space url="https://www.python.org/" src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png" name="Python Coding" desc="Learn Python Tips and Tricks and Share your knowledge with us to help the society." />
                <Space url="https://communicationskills.quora.com/" src="https://ithemes.com/wp-content/uploads/2015/05/communication-skills.png" name="Communication Skills" desc="Share Your Knowledge to deal with people." />
                <Space url="https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/KSCGY" src="https://bookriot.com/wp-content/uploads/2021/01/globe-feature-700x375-1-1280x720.jpg" name="History of World" desc="The History of world so called Human History" />
                <Space url="https://unacademy.com/goal/upsc-civil-services-examination-ias-preparation/KSCGY" src="https://www.eliteias.in/wp-content/uploads/2021/05/Benefits-of-UPSC-Civil-Services-Exam-Preparation.jpg" name="UPSC Preparation Guidance" desc="All the guidance related query of UPSC apirants will be answered here." />
                <Space url="https://jeeadv.ac.in/" src="https://www.aakash.ac.in/blog/wp-content/uploads/2016/12/GETTING-SMART-WITH-IIT-JEE-PREPARATION.jpg" name="IIT JEE Main & Advanced" desc="How to easily score problems and Score in IIT JEE." />
                <Space url="https://test-english.com/" src="https://indiaeducation.net/imagesvr_ce/4091/English.jpg" name="Fix Your English" desc="Learn English Tips and Tricks and Share your knowledge." />
                <Space url="https://www.vocabulary.com/" src="https://i2.wp.com/businessday.ng/wp-content/uploads/2021/02/Vocabulary-PM.png?fit=711%2C400&ssl=1" name="Daily Dose of Vocabulory" desc="Life is all about words" />
                <Space url="https://www.malwarebytes.com/hacker" src="https://vpnoverview.com/wp-content/uploads/what-is-a-hacker-what-is-hacking-featured.png" name="Hacking Zone" desc="Get daily updates for better understanding of Hacking." />
                <Space url="https://www.cnet.com/tech/tech-industry/25-technologies-that-have-changed-the-world/" src="https://www.cnet.com/a/img/resize/343850352b86c00770e28307f6130c26ac2a9485/hub/2017/05/16/0c97294d-077c-465d-879f-76347e53da13/internet-of-things-iot-devices-1705.jpg?auto=webp&width=1200" name="Technical Things" desc="We provide valuable info about gadgets and apps." />

            </div>
        </div>
    )
}

export default AllSpaces
