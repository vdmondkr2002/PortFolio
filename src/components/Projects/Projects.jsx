import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Particle from '../Particle'
import bookxchangerImg from '../../Assets/Projects/BookXChanger-Website.png'
import parkinghelpersImg from '../../Assets/Projects/Parking-Helpers.png'
import quizzoWebsiteImg from '../../Assets/Projects/Quizzo-Website.png'
import mysuruTourismImg from '../../Assets/Projects/Mysuru-Tourism-Website.png'
import ProjectCard from './ProjectCard'

const Projects = ()=>{
    return(
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={bookxchangerImg}
                            title="BookXchanger"
                            description="A website, where people can post ads about the book which they want to sell or search for the books they want to buy and even contact the respective person.
                            With this website searching for an appropriate seller with the book we want becomes super easy. 
                            "
                            link="https://github.com/vdmondkr2002/BookXchanger"
                            siteLink="https://bookxchanger.netlify.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={quizzoWebsiteImg}
                        title="Quizzo App"
                        description="Quizzo is the web app where you can take fun quizzes and save the scores update and even contribute questions.
                        This website provides quizzes on various topics like Science, History , Maths and many more.
                        Add questions to our database to enhance question set.
                        "
                        link="https://github.com/vdmondkr2002/Quizzo-app"
                        siteLink="https://quizzo-v1.netlify.app/"
                        />
                    </Col>
                 
                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={parkinghelpersImg}
                        title="Parking Helpers"
                        description="A website made to help find people parking locations in Mumbai Area.It provides a map of Mumbai area with marking on the parking locations got from dataset.A table is displayed which has addresses of each location nearest to the area selected."
                        link="https://github.com/vdmondkr2002/Parking_Helper"
                        siteLink="https://parking-helpers.herokuapp.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                        imgPath={mysuruTourismImg}
                        title="Mysuru Tourism Website"
                        description="A website created this website during the DSC-WOW Hackathon. This website's frontend is created with basic React. It helps to increase tourism in Mysore by featuring all the toursits spots."
                        link="https://github.com/sagarmude7/DSCWOW_Mysuru-website"
                        />
                    </Col>
                </Row>
            </Container>    
        </Container>  
    )
}

export default Projects
