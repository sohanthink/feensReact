import React from 'react'

const Heading = ({ style, content }) => {
    return (
        <h1 className={style}>{content}</h1>
    )
}

export default Heading