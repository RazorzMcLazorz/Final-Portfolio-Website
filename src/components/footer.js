import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className="foot">
                <div className="footLeft">
                    <a>
                        Powered by Nathaniel Young using <img src = "\assets\React1.png"></img>React <img src = "\assets\jsx.png"></img>JSX <img src = "\assets\redux.png"></img>Redux <img src = "\assets\HTML.png"></img>HTML <img src = "\assets\SCSS.png"></img>SCSS
                    </a>
                </div>
                <div className="footRight">
                    <a>
                        <i class="fab fa-github-square"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        );
    }
}
export default Footer;