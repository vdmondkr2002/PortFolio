import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap'
import {AiOutlineDownload} from 'react-icons/ai'
import Resumepdf from '../../Assets/Vedant-Resume.pdf'
import Particle from '../Particle'
import ResumeContent from './ResumeContent'

const Resume = () => {
    return (
        <Container fluid className="resume-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent:"center",position:"relative"}}>
                    <Button
                        variant="primary"
                        href={Resumepdf}
                        target="_blank"
                        style={{width:"auto"}}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <ResumeContent
                            title="Team Member Of BookXChangr Project"
                            date="January 2021-May 2021"
                            content={[
                                "Worked on the backend as well as frontend of the project using technologies based on MERN",
                                "Suggested and implmented chat feature in the website from scratch using socketIO"
                            ]}
                        />
                        <h3 className="resume-title">Extracurricular Activities</h3>
                        <ResumeContent
                            title="Operations Executive Technovanza-VJTI'20"
                            date="Aug 2020-March 2021"
                            content={[
                                "Planned, documented and implemented the the game event of Robomaze in the Technovanza'20"
                            ]}
                        />
                        <ResumeContent
                            title="Mentor at Inheritance'21"
                            date="Aug 2020-March 2021"
                            content={[
                                "Mentoring and advising SY students on a web development project"
                            ]}
                        />

                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <ResumeContent
                            title="B.Tech in Information Technology [VJTI, Mumbai]"
                            date="2019 - Present"
                            content={[
                                "CGPA: 8.54 (Till 4th Sem)"
                            ]}
                        />
                        <ResumeContent
                            title="12th BOARD(B.K. Birla College,Kalyan)"
                            date="March-2019"
                            content={[
                                "Percentage: 91.8%"
                            ]}
                        />
                        <ResumeContent
                            title="10th BOARD(Surya Marathi School,Kalyan)"
                            date="March-2017"
                            content={[
                                "Percentage: 95.6%"
                            ]}
                        />
                        <h3 className="resume-title">Ranks and Achievements</h3>
                        <ResumeContent
                            content={[
                                "Highest Rating On CodeChef : 1619 , ⭐⭐⭐",
                                "Qualified for Google Codejam Round 1 by succeeding in qualification round",
                                "Participant in DSC-WOW Hackathon 2020",
                                "Event Manager of Culturul Fest(Pratibimb)",
                                "Student Volunteer at ISRO, IMD, LIGO and BARC exhibition"
                            ]}
                        />
                    </Col>
                </Row>
                <Row style={{justifyContent:"center",position:"relative"}}>
                    <Button
                        variant="primary"
                        href={Resumepdf}
                        target="_blank"
                        style={{width:"auto"}}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    )
}

export default Resume
