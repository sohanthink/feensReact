import React from 'react'
import HeadingTwo from '../HeadingTwo'
import Paragraph from '../Paragraph'

const ServiceItem = ({ istyle, hcontent, pcontent }) => {
    return (
        <div class="item">
            <i className={istyle}></i>
            <HeadingTwo content={hcontent} />
            <Paragraph content={pcontent} />
        </div>
    )
}

export default ServiceItem