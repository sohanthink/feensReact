import React from 'react'
import "./client.css"
import HeadingTwo from '../../components/HeadingTwo'
import Paragraph from '../../components/Paragraph'
import Image from '../../components/Image'
import CommonTitle from '../../components/commontitle/CommonTitle'


const Client = () => {
    return (
        <section className="client">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <CommonTitle>
                            <HeadingTwo content="What our clients say about us" />
                            <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed." />
                        </CommonTitle>
                    </div>
                    <div className="right">
                        <h5>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                        <div className="clientinfo">
                            <div className="clientleft">
                                <Image source="images/clients/client1.png" alt="client1" />
                                <h6>Jenny Wilson</h6>
                                <Paragraph content="Vice President" />
                            </div>
                            <div className="clientright">
                                <i className="fa-sharp fa-solid fa-angle-left"></i>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client