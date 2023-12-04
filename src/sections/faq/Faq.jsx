import React from 'react'
import "./faq.css"
import CommonTitle from '../../components/commontitle/CommonTitle'
import Paragraph from '../../components/Paragraph'
import FaqItem from '../../components/FaqItem'

const Faq = () => {
    return (
        <section className="faq">
            <div className="container">
                <div className="box">
                    <div className="leftfaq">
                        <CommonTitle>
                            <h3>Frequently asked questions</h3>
                            <Paragraph content="Contact us for more info" />
                        </CommonTitle>
                    </div>
                    <div className="rightfaq">
                        <div className="holder">
                            <div className="bb">
                                <h2><span>01</span>How much time does it take? <i className="fa-solid fa-xmark"></i></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <FaqItem number="02" content="How much time does it take? " />
                        <FaqItem number="03" content="How much time does it take? " />
                        <FaqItem number="04" content="How much time does it take? " />
                        <FaqItem number="05" content="How much time does it take? " />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq