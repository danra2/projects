import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  mouseHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    var picStyle, cname;
    if (this.state.hover) {
      picStyle = { "border-color": "#a88c5d" };
    } else {
      picStyle = { "border-color": "gray" };
    }
    if (this.props.row == "topRow") {
      cname = "col-xs-12 col-sm-12 col-md-4 col-lg-4 topRow"
    } else {
      cname = "col-xs-12 col-sm-12 col-md-5 col-lg-5 bottomRow";
    }
    return (
      <div className={cname}>
        <div
          id={this.props.pic}
          className="squareShape"
          style={picStyle}
          onMouseEnter={this.mouseHover}
          onMouseLeave={this.mouseHover}
        />
        <h3>{this.props.h3}</h3>
        <p>{this.props.p}</p>
      </div>
    );
  }
}

export default News;
