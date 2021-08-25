import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Preloader from "../src/components/Pre";
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer'
import "./styles.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
    const [load, updateLoad] = useState(true)
    

    useEffect(() => {
        setTimeout(() => {
            updateLoad(false)
        }, 5000)
    }, [])

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar/> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
        
    );
}

export default App;
