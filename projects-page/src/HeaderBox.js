import React, { Component } from 'react';
import './resources/headerandfooter.css';

class HeaderBox extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <div class="container">
            <a href="https://cornellsun.com/" class="logo">Cornell Daily Sun</a>
            <div class="header-mid">
              <a href="#">PROJECTS</a>
            </div>
          </div>
          <div class="container">
            <div class="header-right">
              <a href="#">HOME</a>
              <a href="#">SNAPCHAT</a>
              <a href="#">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBox;