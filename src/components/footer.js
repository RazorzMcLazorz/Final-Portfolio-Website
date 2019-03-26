import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className="foot">
                <div className="footLeft">
                        <div>Powered by Nathaniel Young using</div> 
                        <img src = "\assets\React1.png"></img>
                        <a>React</a>
                        <img src = "\assets\redux.png"></img>
                        <a>Redux</a>
                        <img src = "\assets\HTML.png"></img>
                        <a>HTML</a>
                        <img src = "\assets\SCSS.png"></img>
                        <a>SCSS</a>
                </div>
                <div className="footRight">
                    <a>
                        {/* version number every push add .1 to this */}
                        <a class="version">Version 2.8</a>
                        <a href="https://github.com/RazorzMcLazorz"><i class="fab fa-github-square"></i></a>
                        <a href="https://www.facebook.com/RazorzMcLazorz"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/nate-p-young"><i class="fab fa-linkedin"></i></a>
                    </a>
                </div>
            </div>
        );
    }
}
export default Footer;