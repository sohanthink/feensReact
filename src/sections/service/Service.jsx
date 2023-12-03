import React from 'react'
import "./service.css"
import Paragraph from '../../components/Paragraph'
import HeadingTwo from '../../components/HeadingTwo'
import ServiceItem from '../../components/serviceitem/ServiceItem'

const Service = () => {
    return (
        <section class="service">
            <div class="container">
                <div class="title">
                    <Paragraph content="Features" />
                    <HeadingTwo content="Design that solves problems, one product at a time" />
                </div>
                <div class="box">
                    <ServiceItem istyle="fa-sharp fa-solid fa-people-group" hcontent="Uses Client First" pcontent="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " />
                    <ServiceItem istyle="fa-sharp fa-solid fa-circle-check" hcontent="Two Free Revision Round" pcontent="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " />
                    <ServiceItem istyle="fa-solid fa-pen-ruler" hcontent="Template Customization" pcontent="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " />
                    <ServiceItem istyle="fa-solid fa-clipboard-question" hcontent="24/7 Support" pcontent="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " />
                    <ServiceItem istyle="fa-solid fa-stopwatch" hcontent="Quick Delivery" pcontent="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " />
                    <ServiceItem istyle="Hands-on approach" hcontent="Hands-on approach" pcontent="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. " />
                </div>
            </div>
        </section>
    )
}

export default Service