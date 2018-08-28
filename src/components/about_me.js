import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default class About extends Component {
    // every page switch it goes to the top
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="About">
                <div className="Header">
                    <nav>
                        <ul>
                            <div className = "NotSelected">
                                <Link to="/" className="homes">
                                    Home
                                </Link>
                            </div>
                            <div className = "NotSelected">
                                <Link to="/projects" className="projects">
                                    Projects
                                </Link>
                            </div>
                            <div className = "Selected">
                                <a>
                                    About Me
                                </a>
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
                    <div id = "AboutMeBackGround">
                        <div className = "WhereILearnedEverything">
                            <div className="Tag2">
                                Story of Me
                            </div>
                            <a>
                                Iv Been interested in coding since Junior High, I created mini games stuff that wasn't useful like pong on non coding websites.
                                I took 2 classes in High School that taught me C# and C++ i created lots of mini projects stabilizing my knowledge.
                                After a year I Attended a School Named Bottega for 12 weeks that taught me everything else.
                                Including
                                Front-End Design that is extremely fun to me and very rewarding everytime i complete a project, they interduced me to API's and 
                                React, along with extra languages like Python which is a very clean very easy to read language.
                                The Back-End Coding is also really cool, 
                            </a>
                        </div>
                        <div className = "WhatIKnow">
                            <div className="Tag2">
                                What I Know
                            </div>
                            <a>
                                I can take an Website Assignment and using React build a completely functional websites
                                fit with connections between a DataBase and the Website being able to respond to user logins/Admin logins
                                using CSS and HTML make the Website look !DECENT!
                                built to your liking, and how you want it to look i can change to fit todays designs.
                            </a>
                            <div>
                                <img src = "\assets\ES6LOGO.svg"></img> JavaScript
                            </div>
                            <a>
                                With JavaScript iv spent about 6+ Weeks learning, building stuff on repl.it, CodePen,
                                Visual Studio Code making the Basic Html Css Websites, and React / Redux.
                            </a>
                            <div>
                                <img src = "\assets\PythonLogo.png"></img> Python
                            </div>
                            <a>
                                Learned Python which i can build small games with, and websites with just
                                its not recommended so its very useful in teaching myself how to build certain
                                complex javascript i write it out in python if it works together i convert it
                                to JavaScript speeding my production because JavaScript can be confusing and
                                not fun when building complex so having the blueprint helps build it.
                            </a>
                            <div>
                                <img src = "\assets\CSharp.png"></img> C# | <img src = "\assets\C++.png"></img> C++
                            </div>
                            <a>
                                I learned C Sharp in HighSchool and is the first full language i learned, i used it
                                mostly to build games in Unity. i learned C++ during my Second year of Computer Programming.
                                it was more of a game code but Unity can only accept C#.
                            </a>
                        </div>
                        <Link to="/contact" id = "ContactMe">
                            Contact Me
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}