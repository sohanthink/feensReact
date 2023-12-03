import React from 'react'

const Paragraph = ({ style, content }) => {
    return (
        <p className={style}>{content}</p>
    )
}

export default Paragraph