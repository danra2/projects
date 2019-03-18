import React, { Component } from 'react'; 
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-wrapper">
                <div className="footer-copyright">
                The projects page is where The Sun's experimental pages are consolidated. Many of these formats are one-off, and don't fit within the context of the main Sun site. <br></br> © Copyright 2017, The Cornell Daily Sun
                </div>
                <div className="footer-icons">
                    <div className="footer-icon"><i class="fab fa-facebook"></i></div>
                    <div className="footer-icon"><i class="fab fa-instagram "></i></div>
                    <div className="footer-icon"><i class="fab fa-twitter "></i></div>
                </div>
            </footer>
        ); 
    }
}

export default Footer;