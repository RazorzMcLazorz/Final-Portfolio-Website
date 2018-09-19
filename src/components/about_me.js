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
                                I've been very interested in coding for a while as a hobby, I'm very passionate of this field and want to make it a reality, I have confidence in building projects you assign me because I have built personal projects such as Mad Libs which takes the input and changes state to be added in the story. another project I have my portfolio website, it uses routing to link the different components and renders them correctly when needed. a project I have in the pipeline is my BlackJack React website, it will be using the state changing, setting, and swapping components and calls functions to create a very easy to use Blackjack Game Front End Design that is extremely fun to me and very rewarding every time I complete a project, they introduced me to API's and React, along with extra languages like Python which is a very clean very easy to read language.
                            </a>
                        </div>
                        <div className = "WhatIKnow">
                            <div className="Tag2">
                                What I Know
                            </div>
                            <a>
                                I can take a Website Assignment and using React build a completely functional websites fit with connections between a DataBase and the Website being able to respond to user logins / Admin logins using CSS and HTML make the Website look Decent built to your liking, and how you want it to look I can change to fit today's designs.
                            </a>
                            <div>
                                <img src = "\assets\ES6LOGO.svg"></img> JavaScript
                            </div>
                            <a>
                                With JavaScript, iv spent about 6+ Weeks learning, building stuff on repl.it, CodePen, Visual Studio Code making the Basic Html CSS Websites, and React / Redux.
                            </a>
                            <div>
                                <img src = "\assets\PythonLogo.png"></img> Python
                            </div>
                            <a>
                                Learned Python which I can build small games with, and websites with just it's not recommended so it's very useful in teaching myself how to build certain complex javascript I write it out in python if it works together I convert it to JavaScript speeding my production because JavaScript can be confusing and not fun when building complex so having the blueprint helps build it.
                            </a>
                            <div>
                                <img src = "\assets\CSharp.png"></img> C# | <img src = "\assets\C++.png"></img> C++
                            </div>
                            <a>
                                I learned C Sharp in HighSchool and is the first full language I learned, I used it mostly to build games in Unity. I learned C++ during my Second year of Computer Programming.  it was more of a game code but Unity can only accept C#.
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