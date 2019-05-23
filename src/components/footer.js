import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className="foot">
                <div className="footLeft">
                        <div>Created by Nathaniel Young using</div> 
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
                        <a>Version 2.9</a>
                        <a href="https://github.com/RazorzMcLazorz" target="_blank" class="i fab fa-github-square"></a>
                        <a href="https://www.facebook.com/RazorzMcLazorz" target="_blank" class="i fab fa-facebook"></a>
                        <a href="https://www.linkedin.com/in/nate-p-young/" target="_blank" class="i fab fa-linkedin"></a>
                    </a>
                </div>
            </div>
        );
    }
}
export default Footer;