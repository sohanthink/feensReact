import React from 'react'

const FaqItem = ({ number, content }) => {
    return (
        <div className="holder">
            <div className="bb">
                <h2><span>{number}</span>{content}<i className="fa-solid fa-plus"></i></h2>
            </div>
        </div>
    )
}

export default FaqItem