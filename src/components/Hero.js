
import React from 'react'

import { Col, Row, Container, Jumbotron,Image,Carousel, CarouselItem } from 'react-bootstrap'
import "./Hero.css"
export default function Hero(props) {
    return (

            <Container className="bg-transparent d-flex justify-content-center  flex-column" fluid={false} >
                <Row className="bg-transparent">
                    <Col lg={6} md={6}  sm={12}>
                        <div className="text-sm-left text-center">
                        {props.title && <h1>{props.title}</h1>}
                        {props.title2 && <h1>{props.title2}</h1>}
                        {props.subTitle && <p>{props.subTitle}</p>}
                        </div>
                    
                    </Col>
                    <Col lg={6} md={6}  sm={12}>
                    <Image className="hero-img"  src={process.env.PUBLIC_URL + '/images/wireframes.png'}/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center align-middle row-cols-5" style={{paddingTop:"5vw"}}>
                    <Col className="d-flex justify-content-center align-items-end " >
                    <Image className="photo-business" src={process.env.PUBLIC_URL + '/images/lacreativitat.png'} style={{maxHeight:"50px"}}/>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-end" >
                        <Image className="photo-business"src={process.env.PUBLIC_URL + '/images/VNG-Ajuntament.png'} style={{maxHeight:"45px"}}/>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-end" >
                    <Image className=" photo-business"src={process.env.PUBLIC_URL + '/images/lacreativitat-surtidor.png'} style={{maxHeight:"50px"}}/>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-end mt-sm-0 mt-5" >
                        <Image className="photo-business" src={process.env.PUBLIC_URL + '/images/sushichef-icon-letra2.png'} style={{maxHeight:"37px"}}/>  
                    </Col>
                    <Col className="d-flex justify-content-center align-items-end mt-sm-0 mt-5" >
                        <Image className="photo-business" src={process.env.PUBLIC_URL + '/images/JR.png'} style={{maxHeight:"43px"}}/>  
                    </Col>

                </Row>

            </Container>

    )
}

