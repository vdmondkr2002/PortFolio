import React, { useState, useEffect } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Particle from '../Particle'
import AboutCard from './AboutCard'
import aboutIMg from '../../Assets/Code typing-pana.svg'
import TechStack from './TechStack'
import ToolStack from './ToolStack'
import Github from './Github'


const About = ()=>{
    return(
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent:"center",padding:"10px"}}>
                    <Col md={7} style={{justifyContent:"center",paddingTop:"30px",paddingBottom:"30px"}}>
                        <h1 style={{fontSize:"2.1em",paddingBottom:"20px"}}>
                            Know Who <strong className="purple">I'm</strong>
                        </h1>
                        <AboutCard/>

                    </Col>
                    <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
                        <img src={aboutIMg} alt="about" className="img-fluid"/>
                    </Col>

                </Row>
                <h2 className="project-heading">
                    Professional <strong className="purple">SkillSet</strong>
                </h2>
                <TechStack/>
                <h2 className="project-heading">
                    <strong className="purple"> Tools</strong> I use
                </h2>
                <ToolStack/>
                {/* <Github/> */}
            </Container>
        </Container>
    )
}

export default About