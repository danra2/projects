import React from "react";
import "./css/willard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./News.js";
import Menu from "./Menu";
import CustomCarousel from "./CustomCarousel"
import Footer from '../../components/Footer/Footer.js'; 


class WillardStraight extends React.Component {
  render() {
    return (
      <a>
        <meta charSet="UTF-8" />
        <title>Willard Straight 50th Anniversary</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" type="image/x-icon" href="./images/favicon.png" />
        <link rel="stylesheet" type="text/css" href="./css/willard.css" />
        <link rel="stylesheet" type="text/css" href="./css/slick-theme.css" />
        <link rel="stylesheet" type="text/css" href="./css/slick.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />

        <div className="blockOne">
          {/* <a id="home" className="anchor" /> */}
          <Menu />
          <div className="container">
            <div className="justify-content-md-center">
              <div className="col-auto col-sm-auto col-md-auto">
                <img
                  id="centerCrest"
                  src={require("./images/willardCrest.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <a className="blockTwo">
          <div id="news" className="anchor" />
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <h1>NEWS</h1>
              </div>
            </div>
            <div className="row">
              <News
                pic="square1"
                h3="Oral History of Sun Coverage"
                p="This is the oral account of the Cornell Daily Sun coverage 
                  throughout founding."
                row="topRow"
              />
              <News
                pic="square2"
                h3="Timeline Cornell Protests"
                p="Revisiting the initial sparks that triggered the cascade of
                  events to follow."
                row="topRow"
              />
              <News
                pic="square3"
                h3="Pulitzer Prize Winning Shot"
                p="The story behind the iconic image that made headlines
                throughout the mid 1900s."
                row="topRow"
              />
            </div>
            <div className="row">
              <News
                pic="square4"
                h3="Good Intentions Gone Hostile"
                p="What happended, and why. What were the motives behind one
                extremist group."
                row="bottomRow"
              />
              <News
                pic="square5"
                h3="The Community Reacts"
                p="What were going through the minds of the locals during that
                time."
                row="bottomRow"
              />
            </div>
          </div>
        </a>
        <div className="blockThree">
          <a id="oped" className="anchor" />
          <CustomCarousel />
        </div>
        <div className="blockFour">
          <a id="timeline" className="anchor" />
        </div>
        <Footer />
      </a>
    );
  }
}

export default WillardStraight;
