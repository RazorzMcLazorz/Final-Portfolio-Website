import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
        bestProjects : {
          blackJack : {
            link : '/BlackJack',
            project : 'BlackJack Project',
            src1 : './assets/BlackJackWeb2.png',
            src2 : './assets/BlackJackWireFrame.png',
            para : 'Complete working Black Jack Game online, it will soon be hosted as an app on google play store, after I add animations and sound to the game itself. this game is created in React.JS, it takes the complete knowledge of my coding with JavaScript and React.JS combines it into one to build this fun game.'
          }
        },
        latestProjects : {

        },
        Projects : {

        }
    }
  }

    BestProject() {
      const temp = [...this.state.bestProjects]
        const t = temp.map(project => {
          <div>
            <a href={project.link} className="Project">
              <div>
                {project.project}
              </div>
              <div className="xtraInfo">
              <div>
                <img src={project.scr1}></img>
                <img src={project.scr2}></img>
              </div>
                <div>
                  {project.para}
                </div>
              </div>
            </a>
          </div>
        })
        return t
    }


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
                            {/* {this.BestProject()} */}
                            <a className='outer' href="https://black-jack-website.herokuapp.com/" target="_blank">
                                <div className="Project">
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
                                </div> 
                            </a>
                        </div>

                        <div className="LatestProjectPreview">
                            <div className="Tag">
                                Project im Working on right now
                            </div>
                            <a className='outer'>
                                <div className="Project">
                                    <a>
                                        JoshesReps Project is a Work In Progress
                                    </a>
                                    <div className="xtraInfo">
                                    <div>
                                    </div>
                                        <a>
                                            This is one of my clients websites im currently working on, right now we are in the Drafting stage so i have no pictures to display. But this website will be where he can show off all his Reptiles and sell them to his clients.
                                        </a>
                                    </div>
                                </div> 
                            </a>
                            <a className='outer'>
                                <div className="Project">
                                    <a>
                                        New Personal Website Work In Progress
                                    </a>
                                    <div className="xtraInfo">
                                    <div>
                                    </div>
                                        <a>
                                            My New Website for the new LLC i setup this one is to be more CSS intensive making it look fantastic and way more eye candy.
                                        </a>
                                    </div>
                                </div> 
                            </a>
                            <a className='outer'>
                                <div className="Project">
                                    <a>
                                        WWOutPost 2 Project is a Work In Progress
                                    </a>
                                    <div className="xtraInfo">
                                    <div>
                                        <img src="./assets/WWOutpost21.jpg"></img>
                                        <img src="./assets/WWOutpost22.jpg"></img>
                                    </div>
                                        <a>
                                            This is a successer to the WWOutpost game but will include Multiplayer with up to 2 people, and the coding languages i will be using are TypeScript, Node.js, and Redis as the entire website. This Game at the moment is just in the drafting phase and only partially built, the Database Redis that i will be using will allow me to update the game seemlessly.
                                        </a>
                                    </div>
                                </div> 
                            </a>
                        </div>

                        <div className="PastProjects">

                            <div className="Tag">
                                Past Projects (Click Projects)
                            </div>
                            <a className="Box-Container" href="https://ww1sim.herokuapp.com/" target="_blank">
                                <div className="projectBox">
                                    <div id="pastTitle">
                                        <a>
                                            WW1Simulator Project
                                        </a>
                                    </div>
                                    <div id="hoverInfo">
                                        <div id="IMGS">
                                            <img src="./assets/WW1Sim.png"></img>
                                            <img src="./assets/WW1Sim2.png"></img>
                                        </div>
                                        <div id="Text">
                                            <a>
                                                My first Database Website, using Node.js and mysql hosted via ClearDB servers, The Game is for my highschool History Teacher, to help him with his WW1 game making it easier to keep track of everything while being completely online allowing use anywhere. It deals with player groups, choice decison's for the groups and resource managements per group while at the end sorting everyone into the specific ranking for the next round.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="Box-Container" href="https://wwoutpost.herokuapp.com/" target="_blank">
                                <div className="projectBox">
                                    <div id="pastTitle">
                                        <a>
                                            WWOutpost Project
                                        </a>
                                    </div>
                                    <div id="hoverInfo">
                                        <div id="IMGS">
                                            <img src="./assets/WWOutPost.png"></img>
                                            <img src="./assets/WWOutpost2.png"></img>
                                        </div>
                                        <div id="Text">
                                            <a>
                                                This is a Colony Simulator Game that takes place sort of in the WW's its only 12 rounds and the goal is to gain as much supplys / research by the end of the game. this game is cut short due to the new WWOutpost2 game taking place but i will eventually finish with new ideas in the future. This dives head first into complexity with multiple types of buildings to create along with Research, Production and little fast war battles against the AI.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="Box-Container" href="https://madlibschallenge.herokuapp.com/" target="_blank">
                                <div className="projectBox">
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
                                </div>
                            </a>

                            <a className="Box-Container" href="https://black-jack-website.herokuapp.com/" target="_blank">
                                <div className="projectBox">
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
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state
}
export default Project;