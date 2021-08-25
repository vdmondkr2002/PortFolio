import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import Particle from '../Particle'
import myAvatar from '../../Assets/myAvatar.svg'
import {AiFillGithub,AiOutlineTwitter,AiFillInstagram,AiFillFacebook} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const HomeBottom = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Particle/>
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h2 style={{ fontSize: "2.6em" }}>
                            Let Me <span className="purple">Introduction</span> MySelf
                        </h2>
                        <p className="home-about-body">
                            I'm a Pre Final Year Undergraduate student in Information Technology at VJTI,Mumbai.
                            I'm interseted in learing and building new stuff.
                            <br/>
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple">
                                {" "}
                                C++, Javascript, Python and MERN stack.{" "}
                                </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                am also interested in{" "}
                                <b className="purple">Competitive Coding.</b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with
                            <i>
                                <b className="purple"> Modern Javascript libraries and Frameworks</b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> Node.js and React.js</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                        <img src={myAvatar} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>Find Me On</h1>
                        <p>
                            Feel Free to <span className="purple">Connect</span> with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/vedant-mondkar-9349451b3/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://github.com/vdmondkr2002"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                >
                                <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://www.facebook.com/vedant.mondkar.1"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                >
                                <AiFillFacebook />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://www.instagram.com/vd_mondkr56/"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                                >
                                <AiFillInstagram />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://twitter.com/MondkarVedant"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour  home-social-icons"
                                >
                                <AiOutlineTwitter />
                                </a>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}

export default HomeBottom
