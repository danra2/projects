import React from "react";
import { Redirect } from "react-router";
import newscontent from "./newscontent";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      redirect: false
    };
  }

  mouseHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  handleOnClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    var customStyle;
    if (this.state.hover) {
      customStyle = {
        borderColor: "#a88c5d",
        backgroundImage: `url(${this.props.pic})`
      };
    } else {
      customStyle = {
        borderColor: "gray",
        backgroundImage: `url(${this.props.pic})`
      };
    }

    if (this.state.redirect) {
      return <Redirect to={`/WillardStraight/news/${this.props.id}`} />;
    }
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 topRow">
        <div
          id="square"
          className="squareShape"
          style={customStyle}
          onMouseEnter={this.mouseHover}
          onMouseLeave={this.mouseHover}
          onClick={this.handleOnClick}
        />
        <h3>{this.props.h3}</h3>
        <p>{this.props.p}</p>
      </div>
    );
  }
}

export default class NewsBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var rows = [];
    for (let i = 0; i < newscontent.length; i++) {
      rows.push(
        <News
          id={i + 1}
          pic={newscontent[i].pic}
          h3={newscontent[i].h3}
          p={newscontent[i].p}
        />
      );
    }
    return <div className="row">{rows}</div>;
  }
}
