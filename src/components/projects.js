import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default class Project extends Component {

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
                            
                            <Link to="/BlackJack" className="Project">
                                <a>
                                    BlackJack Project
                                </a>
                                <div className="xtraInfo">
                                <div>
                                    <img src="./assets/BlackJackWeb2.png"></img>
                                    <img src="./assets/BlackJackWireFrame.png"></img>
                                </div>
                                    <a>
                                        Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.
                                    </a>
                                </div>
                            </Link>

                        </div>

                        <div className="LatestProjectPreview">
                            <div className="Tag">
                                Project im Working on right now
                            </div>
                           
                            <Link to="/WWOutpost" className="Project">
                                <a>
                                    WWOutpost Project is a Work In Progress
                                </a>
                                <div className="xtraInfo">
                                <div>
                                    <img src="./assets/WWOutPost.png"></img>
                                    <img src="./assets/WWOutPost2.png"></img>
                                </div>
                                    <a>
                                        A mini city manager game, this game allows the user to control an Outpost within my ww2 alternate universe. Its a game to help me out and also to give me somthing to do on my own time anywhere since its online. This is not complete and is hosted but doesnt fully work i am still working on the major things like bases buffs to your settlements.
                                    </a>
                                </div>
                            </Link> 
                        </div>

                        <div className="PastProjects">

                            <div className="Tag">
                                Past Projects (Click Projects)
                            </div>

                            <a className="Box-Container">
                                <Link to="/madlibs" className="projectBox">
                                    <div id="pastTitle">
                                        <a>
                                            Madlibs Project
                                        </a>
                                    </div>
                                    <div id="hoverInfo">
                                        <div id="IMGS">
                                            <img src="\assets\MadLibsPic.png"></img>
                                            <img src="\assets\madlibsGen.png"></img>
                                        </div>
                                        <div id="Text">
                                            <a>
                                                Madlibs uses this.state.values and changes the state by setState to the value. Its a Madlibs game hosted on the web, it shows basic React.JS of taking input and putting in the correct spots to make a nice little story.
                                                
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            </a>

                            <a className="Box-Container">
                                <Link to="/BlackJack" className="projectBox">
                                    <div id="pastTitle">
                                        <a>
                                            BlackJack Project
                                        </a>
                                    </div>

                                    <div id="hoverInfo">
                                        <div id="IMGS">
                                            <img src="./assets/BlackJackWeb2.png"></img>
                                            <img src="./assets/BlackJackWireFrame.png"></img>
                                        </div>
                                        <div id="Text">
                                            <a>
                                                Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.
                                            </a>
                                        </div>
                                    </div>
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