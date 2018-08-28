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
                    <div className="InputofContactMe">
                    {/* FORM */}
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name: <input className="norm" type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email: <input className="norm" type="text" onChange={this.handleChange} />
                        </label>
                        <label>
                            Company: <input className="norm" type="text" onChange={this.handleChange} />
                        </label>
                        <label>
                            Comment: <input className="area" type="textbox" onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    </div>
                    <div className = "ContactInfo">
                        <a>801 - 687 - 3065</a>
                        <a>young.nathaniel95@gmail.com</a>
                        <a>Eagle Mountain, UT</a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}