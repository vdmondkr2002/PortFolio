import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {BiLinkExternal} from 'react-icons/bi'

const ProjectCard = (props) => {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>{props.description}</Card.Text>
                <Button variant="primary" href={props.link} target="_blank">
                    <BiLinkExternal/> View Project
                </Button>
                <br/>
                <br/>
                {
                    props.siteLink?(
                        <Button variant="secondary" href={props.siteLink} target="_blank">
                            <BiLinkExternal/> View live
                        </Button>
                    ):null
                }
            </Card.Body>
        </Card>
    )
}

export default ProjectCard
