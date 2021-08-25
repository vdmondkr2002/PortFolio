import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import {DiPython,DiJavascript1,DiJava,DiHtml5,DiBootstrap,DiReact,DiNodejs,DiMongodb} from 'react-icons/di'
import {SiRedux,SiMaterialUi,SiMariadb} from 'react-icons/si'
import {FaCss3Alt} from 'react-icons/fa'

const TechStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaCss3Alt />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMaterialUi />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMariadb />
            </Col>
        </Row>
    )
}

export default TechStack
