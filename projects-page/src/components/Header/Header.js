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
                    <div className="header-link"><a href="#">Home</a></div>
                    <div className="header-link"><a>Snapchat</a></div>
                    <div className="header-link"><a href="https://cornellsun.com/contact-us/">Contact</a></div>
                    <div className="header-icon"><a href="https://www.facebook.com/cornellsun/"><i class="fab fa-facebook"></i></a></div>
                    <div className="header-icon"><a href="https://www.instagram.com/cornellsun/"><i class="fab fa-instagram "></i></a></div>
                    <div className="header-icon"><a href="https://twitter.com/cornellsun/"><i class="fab fa-twitter "></i></a></div>
                </div>
            </header>
        ); 
    }
}

export default Header;