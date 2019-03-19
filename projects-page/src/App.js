import React, { Component } from 'react';
import LandingPage from './screens/LandingPage.js'; 
import PhotoWeek from './screens/PhotoWeek/PhotoWeek.js';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/week-in-photos" component={PhotoWeek} />
      </Router>
      </div>
    );
  }
}

export default App;
