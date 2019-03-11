import React, { Component } from 'react';
import Articles from './components/Articles/Articles.js'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Articles/>
      </div>
    );
  }
}

export default App;
