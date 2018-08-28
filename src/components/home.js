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
                    <div className="videoheader">
                        <video className="VIDEO"
                            autoPlay
                            loop
                            muted
                            src="\assets\ParticleVideo.mp4"
                        />
                    <div className = "NameBox">
                        <a>
                            Nathaniel P Young
                        </a>
                    </div>
                    </div>
                    <div className = "PreviewProjects">
                        Projects
                        <a>

                        </a>
                        <a>

                        </a>
                    </div>
                    
                    <div className = "MyPhoto">
                        <img src = "\assets\coding.jpg"></img>
                        <img src = "\assets\Me2.jpg"></img>
                        <img src = "\assets\Library.jpg"></img>
                    </div>
                </div>
                <div className = "SummaryOfEducation">
                    <a name="CodeAnchor"></a>
                    {/* ANCHOR ^ */}
                    <div className="whatiknow">
                        The Languages I know and familiar with are:
                    </div>
                    <div className="CodesIKnow">
                        <div>
                            <a>
                                <img src = "\assets\ES6LOGO.svg"></img> JavaScript
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
                                <img src = "\assets\jsx.png"></img> JSX
                            </a>
                        </div>
                        <div>
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
                                <img src = "\assets\mongodb-logo.png"></img> MongoDB
                            </a>
                            <a>
                                <img src = "\assets\PowerShell.png"></img> Shell
                            </a>
                            <a>
                                <img src = "\assets\redux.png"></img> Redux
                            </a>
                        </div>
                    </div>
                </div>
                    <Footer />
            </div>
        );
    }
}
