import React, { useState, useEffect } from 'react'
import BootNavbar from 'react-bootstrap/Navbar'
import {Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import {AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineUser,} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Navbar = ()=>{
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    const scrollHandler = ()=> {
        if (window.scrollY >= 20) {
        updateNavbar(true);
        } else {
        updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <BootNavbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <BootNavbar.Brand href="/">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </BootNavbar.Brand>
                <BootNavbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </BootNavbar.Toggle>
                <BootNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home" style={{marginLeft:"auto"}}>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </BootNavbar.Collapse>
            </Container>
        </BootNavbar>
    )
}

export default Navbar