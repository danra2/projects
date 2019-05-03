import React, { Component } from "react";
import LandingPage from "./screens/LandingPage.js";
import PhotoWeek from "./screens/PhotoWeek/PhotoWeek.js";
import PhotoWeek2 from "./screens/PhotoWeek/PhotoWeek2.js";
import pumpkin from "./screens/Pumpkin/ptower.js";
// import pumpkin from "./screens/template/template.js"; // TEMPLATE FOR NEWS
import Huawei from "./screens/Huawei/Huawei.js";
import WillardStraight from "./screens/WillardStraightPromo/WillardStraight.js";
import Hemp from './screens/Hemp/Hemp'; 
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={LandingPage} />
          <Route path="/huawei" component={Huawei} />
          <Route path="/week-in-photos" component={PhotoWeek} />
          <Route path="/week-in-photos-2" component={PhotoWeek2} />
          <Route path="/pumpkin" component={pumpkin} />
          <Route path="/WillardStraight" component={WillardStraight} />
          <Route path="/hemp-industry" component={Hemp}/>
        </Router>
      </div>
    );
  }
}

export default App;
