import React, { Component } from 'react';
import './resources/headerandfooter.css';

class FooterBox extends Component {
  render() {
    return (
      <div>
        <div class="footer">
          <div class="container">
            <div class="footer-left">
              The projects page is where The Sun's experimental pages are consolidated. Many of these formats
              are one-off, and don't fit within the context of the main Sun site.

              © Copyright 2019, The Cornell Daily Sun
          </div>
          </div>
          <div class="container">
            <div class="footer-right">
              <div class="footer-icon">
                <img src={require("./resources/Rectangle.png")} alt="" />
              </div>
              <div class="footer-icon">
                <img src={require("./resources/Rectangle.png")} alt="" />
              </div>
              <div class="footer-icon">
                <img src={require("./resources/Rectangle.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBox;