import React from 'react'
import Paragraph from '../Paragraph'
import Image from '../Image'
import "./workitem.css"

const WorkItem = ({ source, alt, smalltitle, content }) => {
    return (
        <>
            <div className="item">
                <Image source={source} alt={alt} />
                <h4>{smalltitle}</h4>
                <Paragraph content={content} />
            </div>
        </>
    )
}

export default WorkItem