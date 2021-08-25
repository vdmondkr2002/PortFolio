import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

const AboutCard = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Vedant Mondkar </span>
                        from <span className="purple"> Kalyan,India.</span>
                        <br />I am currently 3rd year B.Tech student of Information
                        Technology at VJTI, Mumbai. I'm{" "}
                        <b className="purple"> Web developer</b> and
                        <b className="purple"> Competative Programming enthusiast.</b>
                        <br />I am looking forward to gain competency and exposure in{" "}
                        <b className="purple">
                        Web development 
                        </b>
                        &nbsp;and&nbsp;
                        <b className="purple">
                        Machine Learning.
                        </b>
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                        <ImPointRight /> Watching Sports
                        </li>
                        <li className="about-activity">
                        <ImPointRight /> Listening Music
                        </li>
                        <li className="about-activity">
                        <ImPointRight /> Travelling
                        </li>
                    </ul>
                    <p style={{ marginBlockEnd: 0, color: "#e68120",paddingBottom:"1em" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Vedant</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
