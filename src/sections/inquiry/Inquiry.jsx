import React from 'react'
import HeadingTwo from '../../components/HeadingTwo'
import Paragraph from '../../components/Paragraph'
import "./inquiry.css"

const Inquiry = () => {
    return (
        <section className="inquiry">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <div className="layout">
                            <HeadingTwo content="Building stellar websites for early startups" />
                            <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim." />
                        </div>
                    </div>
                    <div className="right">
                        <HeadingTwo content="Send inquiry" />
                        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i" />
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email" />
                            <input type="link" placeholder="Paste your Figma design URL" />
                            <button type="submit">Send an Inquiry</button>
                        </form>
                        <div className="getmore"><a className="getmorebtn" href="#">Get in touch with us <i className="fa-solid fa-right-long"></i></a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inquiry