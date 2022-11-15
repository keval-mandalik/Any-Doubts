import React from 'react'

function Space(props) {
    return (
        <a href={props.url}>
            <div className="spaceContainer">
                <div className="spaceImage">
                    <img src={props.src} alt="" />
                </div>


                <div className="spaceDetail">
                    <div className="spaceName">
                        {props.name}
                    </div>

                    <div className="spaceDescription">
                        {props.desc}
                    </div>
                </div>

            </div>
        </a>
    )
}

export default Space
