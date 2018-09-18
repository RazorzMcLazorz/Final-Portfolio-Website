import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default class Project extends Component {
    // every page switch it goes to the top

    // constructor (props) {
    //     super(props);
        
    //     this.state = {
    //         workInProgress: false
    //     }

    // }


    componentDidMount() {
        window.scrollTo(0, 0)
      }

    //   hoverEffect() {

    //   }
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
                           
                            <div className="Project" hover>
                                <a>
                                    BlackJack Project is a Work In Progress
                                </a>
                                <div className="xtraInfo">
                                <div>
                                    <img src="./assets/BlackJackWeb.png"></img>
                                    <img src="./assets/BlackJackWireFrame.png"></img>
                                </div>
                                    <a>
                                        as you can see in the picture its not complete at the moment but im still working on it and have been, just while im doing the project im learning React. The blackjack Project has a low fidelity wire frame seen in the second picture, other parts of the user story is not shown, but if you want to see them just send me an email and i can send them.
                                    </a>
                                </div>
                                
                            </div> 
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
                                                Madlibs uses this.state.values and changes the state by setState to the value.
                                                
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