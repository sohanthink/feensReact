import React from 'react'
import CommonTitle from '../../components/commontitle/CommonTitle'
import "./work.css"
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import WorkItem from '../../components/workitem/WorkItem'

const Work = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <div className="title">
                            <CommonTitle>
                                <Heading content="How we work" />
                                <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
                                <a className="titlebtn" href="#">Get in touch with us <i className="fa-solid fa-right-long"></i></a>
                            </CommonTitle>
                        </div>
                    </div>
                    <div className="right">
                        <div className="box">
                            <WorkItem source="images/work/work1.png" alt="work1" smalltitle="Strategy" content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            <WorkItem source="images/work/work2.png" alt="work2" smalltitle="Wireframing" content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            <WorkItem source="images/work/work3.png" alt="work3" smalltitle="Design" content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                            <WorkItem source="images/work/work4.png" alt="work4" smalltitle="Development" content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work