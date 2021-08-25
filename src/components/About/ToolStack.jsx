import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {SiVisualstudiocode,SiJupyter,SiNetlify,SiHeroku,SiGithub} from 'react-icons/si'

const ToolStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJupyter />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNetlify />
            </Col>
        </Row>
    )
}

export default ToolStack
