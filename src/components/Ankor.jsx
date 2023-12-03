import React from 'react'

const Ankor = ({ link, content, style }) => {
    return (
        <a className={style} href={link}>{content}</a>
    )
}

export default Ankor