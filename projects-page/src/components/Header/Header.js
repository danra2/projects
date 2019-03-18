import React, { Component } from 'react'; 
import './Header.css';
import logo from '/Users/caylahamann/Desktop/cornellsun/projects-page/src/assets/images/logo.png';

class Header extends Component {
    render () {
        return (
            <header className = "header">
                <div className="header-right">
                    <div className="header-logo-wrapper"><img className="header-logo" src={logo}/></div>
                    <div className="header-projects">PROJECTS</div>
                </div>
                <div className="header-left">
                    <div className="header-link">Home</div>
                    <div className="header-link">Snapchat</div>
                    <div className="header-link">Contact</div>
                    <div className="header-icon"><i class="fab fa-facebook"></i></div>
                    <div className="header-icon"><i class="fab fa-instagram "></i></div>
                    <div className="header-icon"><i class="fab fa-twitter "></i></div>
                </div>
            </header>
        ); 
    }
}

export default Header;