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
                        <a>You can find me at these links</a>
                        <a className="MYLinks">
                            <Link to="/github"><i class="fab fa-github-square"></i></Link>
                            <Link to="/facebook"><i class="fab fa-facebook"></i></Link>
                            <Link to="/linkedin"><i class="fab fa-linkedin"></i></Link>
                        </a>
                        <a>Or</a>
                        <a className="MYLinksTop" >Manually message me/call at: </a>
                        <a id="MYLinksTop2" className="MYLinksTop3" >801 - 687 - 3065</a>
                        <a className="MYLinksTop3" >nateyoungdev@gmail.com</a>
                        <a className="MYLinksTop">To make it fast here's some links to the Emails</a>
                        <div className="EmailLinks">
                            <Link to="/outlook" className="projects"><a><img src = "\assets\gmail.png"></img></a></Link>
                            <Link to="/gmail" className="projects"><a><img src = "\assets\Outlook.png"></img></a></Link>
                            <Link to="/yahoo" className="projects"><a><img src = "\assets\yahoo.png"></img></a></Link>
                            <Link to="/inbox" className="projects"><a><img src = "\assets\inbox.png"></img></a></Link>
                            <Link to="/icloud" className="projects"><a><img src = "\assets\icloud.png"></img></a></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}