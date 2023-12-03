import React from 'react'
import CommonTitle from '../../components/commontitle/CommonTitle'
import Paragraph from '../../components/Paragraph'
import ProjectItem from '../../components/projectitem/ProjectItem'
import Image from '../../components/Image'
import "./project.css"

const Project = () => {
    return (
        <section className="project">
            <div className="container">
                <div className="box">
                    <div className="left">
                        <div className="title">
                            <h2>View our projects</h2>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title">
                            <a className="titlebtn" href="#">Get in touch with us <i className="fa-solid fa-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className="mt">
                    <div className="box">
                        <div className="leftimg">
                            <Image source="images/project/project1.png" alt="project1" />
                            <div className="overlay">
                                <div className="text">
                                    <CommonTitle>
                                        <h3>Workhub office Webflow Webflow Design</h3>
                                        <Paragraph content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam " />
                                        <div className="title">
                                            <a className="titlebtn" href="#">View project <i className="fa-solid fa-right-long"></i></a>
                                        </div>
                                    </CommonTitle>
                                </div>
                            </div>
                        </div>
                        <div className="rightimg">
                            <ProjectItem source="images/project/project2.png" alt="project2" headingcontent="Unisaas Website Design" />
                            <ProjectItem source="images/project/project3.png" alt="project2" headingcontent="Unisaas Website Design" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Project