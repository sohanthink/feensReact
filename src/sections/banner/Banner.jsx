import React from 'react'
import "./banner.css"
import Image from '../../components/Image'
import bannerImg from "../../../public/images/banner.png"
import Ankor from '../../components/ankor'
import Paragraph from '../../components/Paragraph'
import Heading from '../../components/Heading'

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <Heading content='Building stellar websites for early startups' />
                        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
                        <Ankor style="workbtn" link="#" content="View our work" />
                        <a className="price" href="#">View Pricing <i className="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className="right">
                        <Image source={bannerImg} alt="banner" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner