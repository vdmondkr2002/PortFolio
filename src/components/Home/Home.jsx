import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Particle from '../Particle'
import Type from './Type'
import homeLogo from '../../Assets/Typing-bro.svg'
import HomeBottom from './HomeBottom'

const Home = () => {
    return (
        <section>
            <Container fluid className="home-section"  id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header"> 
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There! <span className="wave">👋🏻</span>
                            </h1>
                            <h2 className="heading-name">I'M <strong className="main-name">VEDANT MONDKAR</strong></h2>
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col> 
                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img src={homeLogo} alt="home-pic" className="img-fluid"/>
                        </Col> 
                    </Row>
                </Container> 
                <HomeBottom/>
            </Container> 
        </section>  
    )
}

export default Home