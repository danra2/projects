import React, { Component } from "react";
import "../template/template.css";
import content from "./OpedsContent.js";
import Footer from "../../components/Footer/Footer.js";
// import { Link } from "react-router-dom";

class oped extends Component {
  render() {
    const rows = [];
    for (let i = 0; i < content.length; i++) {
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
                  <p className="pull-quote-para">{content[i].p5}</p>
                </div>
                <div className="col-sm-4 cols">
                  <div className="pull-quote">
                    <p className="pull-quote-line">________________</p>
                    <p className="pull-quote-content">{content[i].quote1}</p>
                    <p className="pull-quote-line">________________</p>
                  </div>
                </div>
              </div>
              <p className="bodyparas">{content[i].p6}</p>
              <div className="row">
                <div className="col-sm-6 cols">
                  <img
                    className="in-text-img"
                    src={`${content[i].image1}`}
                    alt=""
                  />
                </div>
                <div className="col-sm-6 cols">
                  <p className="img-caption">
                    <span className="img-caption-bold">
                      {content[i].quote2}
                    </span>
                    {content[i].quote2_1}
                  </p>
                </div>
              </div>

              <p className="bodyparas">{content[i].p7}</p>
              <div className="row">
                <div className="col-sm-6 cols">
                  <img
                    className="in-text-img"
                    src={`${content[i].image2}`}
                    alt=""
                  />
                </div>
                <div className="col-sm-6 cols">
                  <p className="img-caption">
                    <span className="img-caption-bold">
                      {content[i].quote3}
                    </span>
                    {content[i].quote3_1}
                  </p>
                </div>
              </div>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter2}</span>
                {content[i].p8}
              </p>
              <p className="bodyparas">{content[i].p9}</p>
              <div className="row quote-paragraph">
                <div className="col-sm-8 cols">
                  <p className="pull-quote-para" />
                  <p className="pull-quote-para">{content[i].p10}</p>
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
              <p className="bodyparas" />
              <p className="divider bodyparas">. . . . .</p>
              <p className="bodyparas ital">{content[i].p12}</p>
              <p className="bodyparas ital">{content[i].p13}</p>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter3}</span>
                {content[i].p14}
              </p>
              <p className="bodyparas">{content[i].p15}</p>
              <p className="bodyparas">{content[i].p16}</p>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter4}</span>
                {content[i].p17}
              </p>
              <p className="bodyparas">{content[i].p18}</p>
              <p className="bodyparas">{content[i].p19}</p>
              <p className="bodyparas">{content[i].p20}</p>
              <p className="bodyparas">{content[i].p21}</p>
              <p className="bodyparas">{content[i].p21}</p>
            </div>
            <div
              className="parallaximage"
              style={{ backgroundImage: `url(${content[i].parallax2})` }}
            />

            <p className="sketch-caption">
              <span className="img-caption-bold">{content[i].parallax2_1}</span>
              {content[i].parallax2_2}
            </p>
            <div className="content">
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter5}</span>
                {content[i].p22}
              </p>
              <p className="bodyparas">{content[i].p23}</p>
              <p className="bodyparas">{content[i].p24}</p>
              <p className="bodyparas">{content[i].p25}</p>
              <p className="bodyparas">{content[i].p26}</p>
              <p className="bodyparas">{content[i].p27}</p>
              <p className="bodyparas">{content[i].p28}</p>
              <p className="bodyparas">{content[i].p29}</p>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter6}</span>
                {content[i].p30}
              </p>
              <p className="bodyparas">{content[i].p31}</p>
              <div className="row quote-paragraph">
                <div className="col-sm-8 cols">
                  <p className="pull-quote-para">{content[i].p32}</p>
                  <p className="pull-quote-para">{content[i].p33}</p>
                  <p className="pull-quote-para">{content[i].p34}</p>
                </div>
                <div className="col-sm-4 cols">
                  <div className="pull-quote">
                    <p className="pull-quote-line">_______________</p>
                    <p className="pull-quote-content">{content[i].quote5}</p>
                    <p className="pull-quote-line">_______________</p>
                  </div>
                </div>
              </div>
              <p className="bodyparas">{content[i].p35}</p>
              <p className="bodyparas">{content[i].p36}</p>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter7}</span>
                {content[i].p37}
              </p>
            </div>
            <div
              className="parallaximage"
              style={{ backgroundImage: `url(${content[i].parallax3})` }}
            />

            <p className="sketch-caption">
              <span className="img-caption-bold">{content[i].parallax3_1}</span>
              {content[i].parallax3_2}
            </p>
            <div className="content">
              <p className="bodyparas">{content[i].p38}</p>
              <p className="bodyparas">{content[i].p39}</p>
              <p className="bodyparas">{content[i].p40}</p>
              <p className="bodyparas">
                <span className="large-letter">{content[i].large_letter8}</span>
                {content[i].p41}
              </p>
              <p className="bodyparas">{content[i].p42}</p>
              <p className="bodyparas">{content[i].p43}</p>
              <br />
              <p className="bodyparas credits">{content[i].p44}</p>
            </div>
            <Footer />
          </div>
        </div>
      );
    }

    return rows;
  }
}
export default oped;
