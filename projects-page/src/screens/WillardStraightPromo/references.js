import React, { Component } from "react";
import content from "./refcontent.js";
import "../template/template.css";

class References extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const i = this.props.i;
    var rows = [];
    var subrows = [];
    if (content[i].length == 0) {
      return " ";
    }
    rows.push(<div id="maintitle-news">References</div>);

    for (let j = 0; j < content[i].length; j++) {
      subrows.push(
        <a className="bodyparas" href={content[i][j]} target="_blank">
          [{j + 1}] : {content[i][j]}
        </a>
      );
    }
    rows.push(subrows);
    subrows = [];

    return <div className="content">{rows}</div>;
  }
}

export default References;
