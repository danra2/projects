import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-wrapper">
                <div className="footer-copyright">
                The projects page is where The Sun's experimental pages are consolidated. Many of these formats are one-off, and don't fit within the context of the main Sun site. <br></br> © Copyright 2019, The Cornell Daily Sun
                </div>
                <div className="footer-icons">
                    <div className="footer-icon"><a href="https://www.facebook.com/cornellsun/"><i class="fab fa-facebook"></i></a></div>
                    <div className="footer-icon"><a href="https://www.instagram.com/cornellsun/"><i class="fab fa-instagram "></i></a></div>
                    <div className="footer-icon"><a href="https://twitter.com/cornellsun/"><i class="fab fa-twitter "></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
