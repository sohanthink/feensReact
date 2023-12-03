import React from 'react'
import Image from '../Image'

const ProjectItem = ({ source, alt, headingcontent }) => {
    return (
        <div className="imgbox">
            <Image source={source} alt={alt} />
            <div className="smalloverlay">
                <div className="text">
                    <h3>{headingcontent}</h3>
                    <div className="title">
                        <a className="titlebtn" href="#">View project <i className="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem