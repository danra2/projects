import React, { Component } from "react";
import "../template/template.css";
import content from "./OpedsContent.js";
import Footer from "../../components/Footer/Footer.js";
// import { Link } from "react-router-dom";
class oped extends Component {
  render() {
    const rows = [];
    var div;
    for (let i = 0; i < content.length; i++) {
      if (content[i].p7 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
          </div>
        );
      } else if (content[i].p8 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
            <p className="bodyparas">{content[i].p8}</p>
          </div>
        );
      } else if (content[i].p9 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
            <p className="bodyparas">{content[i].p8}</p>
            <p className="bodyparas">{content[i].p9}</p>
          </div>
        );
      } else if (content[i].p10 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
            <p className="bodyparas">{content[i].p8}</p>
            <p className="bodyparas">{content[i].p9}</p>
            <p className="bodyparas">{content[i].p10}</p>
          </div>
        );
      } else if (content[i].p11 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
            <p className="bodyparas">{content[i].p8}</p>
            <p className="bodyparas">{content[i].p9}</p>
            <p className="bodyparas">{content[i].p10}</p>
            <div className="row quote-paragraph">
              <div className="col-sm-8 cols">
                <p className="pull-quote-para" />
                <p className="pull-quote-para">{content[i].p11}</p>
              </div>
              <div className="col-sm-4 cols">
                <div className="pull-quote">
                  <p className="pull-quote-line">_______________</p>
                  <p className="pull-quote-content">{content[i].quote4}</p>
                  <p className="pull-quote-line">_______________</p>
                </div>
              </div>
            </div>
          </div>
        );
      } else if (content[i].p12 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
            <p className="bodyparas">{content[i].p8}</p>
            <p className="bodyparas">{content[i].p9}</p>
            <p className="bodyparas">{content[i].p10}</p>
            <div className="row quote-paragraph">
              <div className="col-sm-8 cols">
                <p className="pull-quote-para" />
                <p className="pull-quote-para">{content[i].p11}</p>
              </div>
              <div className="col-sm-4 cols">
                <div className="pull-quote">
                  <p className="pull-quote-line">_______________</p>
                  <p className="pull-quote-content">{content[i].quote4}</p>
                  <p className="pull-quote-line">_______________</p>
                </div>
              </div>
            </div>
            <p className="bodyparas">{content[i].p12}</p>
          </div>
        );
      } else if (content[i].p13 !== "") {
        div = (
          <div>
            <p className="bodyparas">{content[i].p7}</p>
            <p className="bodyparas">{content[i].p8}</p>
            <p className="bodyparas">{content[i].p9}</p>
            <p className="bodyparas">{content[i].p10}</p>
            <div className="row quote-paragraph">
              <div className="col-sm-8 cols">
                <p className="pull-quote-para" />
                <p className="pull-quote-para">{content[i].p11}</p>
              </div>
              <div className="col-sm-4 cols">
                <div className="pull-quote">
                  <p className="pull-quote-line">_______________</p>
                  <p className="pull-quote-content">{content[i].quote4}</p>
                  <p className="pull-quote-line">_______________</p>
                </div>
              </div>
            </div>
            <p className="bodyparas">{content[i].p12}</p>
            <p className="bodyparas">{content[i].p13}</p>
          </div>
        );
      }
      rows.push(
        <div>
          <div>
            <meta charSet="UTF-8" />
            <title>{content[i].title}</title>
            <link rel="stylesheet" href="css/style.css" type="text/css" />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:600,700,800|Roboto:100,300,400,500"
              rel="stylesheet"
            />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js" />
            <script src="jquery-3.2.1.min.js" />
            <script src="js/main.js" />
            <script
              src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
              integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
              crossorigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
              crossOrigin="anonymous"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
              shrink-to-fit="no"
            />
            <link rel="icon" href="images/logo-red.ico" type="image/x-icon" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <meta property="og:image" content="../images/helicopter.png)}" />
          </div>
          <div>
            <div
              className="wrapper"
              style={{ backgroundImage: `url(${content[i].parallax1})` }}
            >
              <a
                className="a-tag-pumpkin"
                href="http://cornellsun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="sunlogo"
                  src={require("./image/sunLogo.png")}
                  alt="Daily Sun"
                />
              </a>
              <p id="first-line-desktop-wsh" className="maintitle-desktop-wsh">
                {content[i].title1}
              </p>
              <p className="maintitle-desktop-wsh">{content[i].title2}</p>
              <p className="maintitle-desktop-wsh">{content[i].title3}</p>
              <p className="byline-desktop-wsh">{content[i].title_caption}</p>
            </div>
            <div className="wrapper-mobile">
              <img src={content[i].parallax1} alt="" />
            </div>
            <p className="sketch-caption-wsh" id="header-photo-caption">
              {content[i].sketch_caption}
            </p>
            <div className="content">
              <div id="maintitle">{content[i].title}</div>
              <div id="byline">{content[i].title_caption}</div>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter1}</span>
                {content[i].p1}
              </p>
              <p className="bodyparas">{content[i].p2}</p>
              <p className="bodyparas">{content[i].p3}</p>
              <div className="row quote-paragraph">
                <div className="col-sm-8 cols">
                  <p className="pull-quote-para">{content[i].p4}</p>
                </div>
                <div className="col-sm-4 cols">
                  <div className="pull-quote">
                    <p className="pull-quote-line">________________</p>
                    <p className="pull-quote-content">{content[i].quote1}</p>
                    <p className="pull-quote-line">________________</p>
                  </div>
                </div>
              </div>
              <p className="bodyparas">{content[i].p5}</p>
              <p className="bodyparas">{content[i].p6}</p>
              {div}
              <p className="bodyparas credits">{content[i].p44}</p>
            </div>
            <Footer />
          </div>
        </div>
      );
    }

    return rows[this.props.i - 1];
  }
}
export default oped;
