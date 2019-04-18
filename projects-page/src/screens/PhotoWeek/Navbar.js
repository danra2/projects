import React, { Component } from "react";
import { Link } from 'react-router';
import logo from '../../assets/images/inverted-logo.png';
import "./PhotoWeek.css";


class Navbar extends Component {
  render() {
    return (
      <div className="photo-nav-container">
        <div className="photo-nav-left">
          <a href="https://cornellsun.com/">
            <img className="photo-sun-logo" src={logo} alt="" />
          </a>
        </div>
        <div className="photo-nav-right">
          <div className="photo-nav-link"><a href="https://cornellsun.com/contact-us/">Contact</a></div>
          <div className="photo-nav-icon"><a href="https://www.facebook.com/cornellsun/"><i class="fab fa-facebook"></i></a></div>
          <div className="photo-nav-icon"><a href="https://www.instagram.com/cornellsun/"><i class="fab fa-instagram "></i></a></div>
          <div className="photo-nav-icon"><a href="https://twitter.com/cornellsun/"><i class="fab fa-twitter "></i></a></div>
        </div>
      </div>
    );
  }
}

export default Navbar;