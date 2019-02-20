import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value );
        event.preventDefault();
      }
    // every page switch it goes to the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Contact">
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
                            <div className = "NotSelected">
                                <Link to="/about_me" className="abouts">
                                        About Me
                                </Link>
                            </div>
                            <div className = "Selected">
                                <a>
                                    Contact
                                </a>
                            </div>
                        </ul>
                    </nav>
                </div> 
                <div className="Contactbox">
                    
                    <div className = "ContactInfo">
                        <div>You can find me at these links</div>
                        <div className="MYLinks">
                            <a href="https://github.com/RazorzMcLazorz" target="_blank"><i class="fab fa-github-square"></i></a>
                            <a href="https://www.facebook.com/RazorzMcLazorz" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/nate-p-young/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <div>Or</div>
                        <div className="MYLinksTop" >Manually message me at: </div>

                        <div className="MYLinksTop3" type="text" id ="email" value="nateyoungdev@gmail.com">nateyoungdev@gmail.com</div>

                        <div className="MYLinksTop">To make it faster here's some links to the Emails</div>
                        <div className="EmailLinks">
                            <a href="https://mail.google.com/" target="_blank" className="projects"><img src = "\assets\gmail.png"></img></a>
                            <a href="https://outlook.live.com/owa/" target="_blank" className="projects"><img src = "\assets\Outlook.png"></img></a>
                            <a href="https://overview.mail.yahoo.com/" target="_blank" className="projects"><img src = "\assets\yahoo.png"></img></a>
                            <a href="http://www.inbox.com/tech/" target="_blank" className="projects"><img src = "\assets\inbox.png"></img></a>
                            <a href="https://www.icloud.com/" target="_blank" className="projects"><img src = "\assets\icloud.png"></img></a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}