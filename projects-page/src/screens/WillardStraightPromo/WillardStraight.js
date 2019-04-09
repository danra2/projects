import React from "react";
import "./css/willard.css";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class WillardStraight extends React.Component {
  render() {
    return (
      <div>
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
          <a id="home" className="anchor" />
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a href="https://cornellsun.com/">
                    <img
                      src={require("./images/sunLogo.png")}
                      id="sunLogo"
                      alt="Daily Sun Logo"
                    />
                  </a>
                </div>
                <div className="collapse navbar-collapse" id="navbar">
                  <ul>
                    <li>
                      <a href="/WillardStraight#home">HOME</a>
                    </li>
                    <li>
                      <a href="/WillardStraight#news">NEWS</a>
                    </li>
                    <li>
                      <a href="/WillardStraight#oped">OPED</a>
                    </li>
                    <li>
                      <a href="/WillardStraight#timeline">TIMELINE</a>
                    </li>
                  </ul>
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-auto col-sm-auto col-md-auto">
                    <img
                      id="centerCrest"
                      src={require("./images/willardCrest.png")}
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="blockTwo">
          <a id="news" className="anchor" />
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <h1>NEWS</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 topRow">
                <div id="square1" className="squareShape" />
                <h3>Oral History of Sun Coverage</h3>
                <p>
                  This is the oral account of the Cornell Daily Sun coverage
                  throughout founding.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 topRow">
                <div id="square2" className="squareShape" />
                <h3>Timeline Cornell Protests</h3>
                <p>
                  Revisiting the initial sparks that triggered the cascade of
                  events to follow.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 topRow">
                <div id="square3" className="squareShape" />
                <h3>Pulitzer Prize Winning Shot</h3>
                <p>
                  The story behind the iconic image that made headlines
                  throughout the mid 1900s.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 bottomRow">
                <div id="square4" className="squareShape" />
                <h3>Good Intentions Gone Hostile</h3>
                <p>
                  What happended, and why. What were the motives behind one
                  extremist group.
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 bottomRow">
                <div id="square5" className="squareShape" />
                <h3>The Community Reacts</h3>
                <p>
                  What were going through the minds of the locals during that
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blockThree">
          <a id="oped" className="anchor" />
          {}
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={45}
            totalSlides={2}
            isPlaying={true}
            lockOnWindowScroll={true}
            dragEnabled={false}
          >
            <Slider>
              <Slide index={0}>
                <img
                  src={require("./images/opedHero2.png")}
                  alt="Oped Speaker One"
                />
              </Slide>

              <Slide index={1}>
                <img
                  src={require("./images/opedHero1.png")}
                  alt="Oped Speaker Two"
                />
              </Slide>
            </Slider>
            <DotGroup className="dots" />
          </CarouselProvider>
          <div className="blockFour">
            <a id="timeline" className="anchor" />
          </div>
        </div>
      </div>
    );
  }
}

export default WillardStraight;
