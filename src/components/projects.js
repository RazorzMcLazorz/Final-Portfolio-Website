import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default class Project extends Component {
    // every page switch it goes to the top
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="Project">
                <div className="Header">
                    <nav>
                        <ul>
                            <div className = "NotSelected">
                                <Link to="/" className="homes">
                                    Home
                                </Link>
                            </div>
                            <div className = "Selected">
                                <a>
                                    Projects
                                </a>                              
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
                <div className="body">
                    <div className="Projectscentering">
                        <div className="BestProjectPreview">
                            <div className="Tag">
                                Best Project
                            </div>
                        </div>
                        <div className="LatestProjectPreview">
                            <div className="Tag">
                                Project im Working on right now
                            </div>
                        </div>
                        <div className="PastProjects">
                            <div className="Tag">
                                Past Projects (Click Projects)
                            </div>
                            <a className="Box-Container">
                                <Link to="/madlibs" className="projectBox">
                                    <img src="\assets\MadLibsPic.png"></img>
                                    <a>
                                        One of my Projects that uses this.state.values and changes by setState
                                    </a>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}