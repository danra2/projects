import React, { Component } from "react";
import LandingPage from "./screens/LandingPage.js";
import PhotoWeek from "./screens/PhotoWeek/PhotoWeek.js";
import PhotoWeek2 from "./screens/PhotoWeek/PhotoWeek2.js";
import PhotoWeek3 from "./screens/PhotoWeek/PhotoWeek3.js";
import pumpkin from "./screens/Pumpkin/ptower.js";
// import pumpkin from "./screens/template/template.js"; // TEMPLATE FOR NEWS
import Huawei from "./screens/Huawei/Huawei.js";
import WillardStraight from "./screens/WillardStraightPromo/WillardStraight.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WillardTimeline from "./screens/WillardStraightPromo/WillardTimeline.js";
import WillardPhotos from "./screens/WillardStraightPromo/BeforeAfterPhotos";
import OpedsPages from "./screens/WillardStraightPromo/OpedsPages.js";
import NewsPagesContent from "./screens/WillardStraightPromo/NewsPagesContent.js";
import OpedsContent from "./screens/WillardStraightPromo/OpedsContent.js";
import NewsPages from "./screens/WillardStraightPromo/NewsPages.js";
import ScrollToTop from "./ScrollToTop.js";
import Hemp from './screens/Hemp/Hemp';

function WSH({ match }) {
  var rows = [];
  for (let i = 1; i < OpedsContent.length + 1; i++) {
    rows.push(
      <Route
        path={`${match.path}/opeds/${i}`}
        component={() => <OpedsPages i={i} />}
      />
    );
  }
  for (let i = 1; i < NewsPagesContent.length + 1; i++) {
    rows.push(
      <Route
        path={`${match.path}/news/${i}`}
        component={() => <NewsPages i={i} />}
      />
    );
  }
  return (
    <div>
      {rows}
      <Route exact path="/WillardStraight" component={WillardStraight} />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={LandingPage} />
            <Route path="/huawei" component={Huawei} />
            <Route path="/week-in-photos" component={PhotoWeek} />
            <Route path="/week-in-photos-2" component={PhotoWeek2} />
            <Route path="/week-in-photos-3" component={PhotoWeek3} />
            <Route path="/pumpkin" component={pumpkin} />
            <Route path="/WillardStraight" component={WSH} />
            <Route
              path="/WillardStraightTimeline"
              component={WillardTimeline}
            />
            <Route path="/WillardStraightPhotos" component={WillardPhotos} />
            <Route path="/hemp-industry" component={Hemp}/>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
