import React, { Component } from 'react';
import Articles from './../components/Articles/Articles.js'; 
import Header from './../components/Header/Header.js'; 
import Footer from './../components/Footer/Footer.js'; 

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <Header/>
        <Articles/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
