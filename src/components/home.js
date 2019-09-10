import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer'

export default class Home extends Component {
    // every page switch it goes to the top
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="html">
                <div className="Header">
                    <nav>
                        <ul>
                            {/* Nav Bar */}
                            <div className = "Selected">
                                <a>
                                    Home
                                </a>
                            </div>
                            <div className = "NotSelected">
                                <Link to="/projects" className="projects">
                                    Projects
                                </Link>
                            </div>
                            <div className = "NotSelected">
                                <Link to="/about_me" className="abouts">
                                    About Me
                                </Link>
                            </div>
                            <div className = "NotSelected">
                                <Link to="/contact" className="contacts">
                                    Contact
                                </Link>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className = "body">
                {/* The Background Video */}
                    <div className="videoheader">
                        { screen.width >= 600 ? <video className="VIDEO"
                            autoPlay
                            loop
                            muted
                            src="\assets\ParticleVideo.mp4"
                        /> : ''}
                    <div className = "NameBox">
                    {/* Name Tag */}
                        <a>
                            Nathaniel P Young
                        </a>
                        <a>
                            Full Stack Developer
                        </a>
                    </div>
                    </div>
                    <div className = "PreviewProjects">
                        Projects
                        <a>
                            {/* MadLibs Preview fast click */}
                            <a className="PreviewProject" href="https://ww1sim.herokuapp.com/" target="_blank">
                                <div className="projectBox">
                                    <img src="./assets/WW1Sim.png"></img>
                                </div>
                            </a>
                        </a>
                        <a>
                            {/* BlackJack Preview fast click */}
                            <a className="PreviewProject" href="https://black-jack-website.herokuapp.com/" target="_blank">
                                <div className="projectBox">
                                    <img src="\assets\BlackJackWeb2.png"></img>
                                </div>
                            </a>
                        </a>
                    </div>
                    
                    <div className = "MyPhoto">
                    <div>
                        <img src = "\assets\coding.jpg"></img>
                    </div>
                    <div>
                        <img src = "\assets\Me2.jpg"></img>
                    </div>
                    <div>
                        <img src = "\assets\Library.jpg"></img>
                    </div>
                    </div>
                </div>
                <div className = "SummaryOfEducation">
                    <a name="CodeAnchor"></a>
                    {/* ANCHOR ^ */}
                    <div className="whatiknow">
                    {/* Languages I Know */}
                        The Languages I know and familiar with are:
                    </div>
                    <div className="CodesIKnow">
                        <div id="left">
                            <a>
                                <img src = "\assets\ES6LOGO.svg"></img> JavaScript
                            </a>
                            <a>
                                <img src = "\assets\typescript.svg"></img> Typescript
                            </a>
                            <a>
                                <img src = "\assets\PythonLogo.png"></img> Python 3
                            </a>
                            <a>
                                <img src = "\assets\React1.png"></img> React
                            </a>
                            <a>
                                <img src = "\assets\HTML.png"></img> HTML 5
                            </a>
                            <a>
                                <img src = "\assets\CSS.png"></img> CSS - FlexBox
                            </a>
                            <a>
                                <img src="\assets\mysql.png"></img> MySQL
                            </a>
                        </div>
                        <div id="right">
                            <a>
                                <img src = "\assets\SCSS.png"></img> SCSS
                            </a>
                            <a>
                                <img src = "\assets\CSharp.png"></img> C#
                            </a>
                            <a>
                                <img src = "\assets\C++.png"></img> C++
                            </a>
                            <a>
                                <img src = "\assets\ClearDB.jpg"></img> ClearDB
                            </a>
                            <a>
                                <img src = "\assets\Bash.jpg"></img> Bash Terminal
                            </a>
                            <a>
                                <img src = "\assets\redux.png"></img> Redux
                            </a>
                        </div>
                    </div>
                    <div className="WhatIKnowTitle">
                        
                    </div>
                </div>
                    <Footer />  
            </div>
        );
    }
}
