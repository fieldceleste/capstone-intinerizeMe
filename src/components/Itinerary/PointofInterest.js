import React from "react";

import LoadingDisplay from "./LoadingDisplay";
import Piece from "./Piece";
import Origin from "./Origin";

import { requestApi } from "../ApiController";

import "../styles/PointofInterest.css";

export default class PointofInterest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointofinterest: null
    };
  }

  componentDidMount() {
    requestApi (
      `pointofinterest.json?id=${this.props
        .PointofInterestId}&fields=name,id,content,score,booking_info`
    )
      .then(json => {
        this.setState({ pointofinterest: json.results[0] });
      })
      .catch(rejected => {
        console.log("REJECTED: ", rejected);
      });
  }

  render() {
    return (
      <div>
        {this.state.pointofinterest ? <PointofInterestBody pointofinterest={this.state.pointofinterest} /> : <LoadingDisplay />}
      </div>
    );
  }
}

class PointofInterestBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    const { pointofinterest } = this.props;

    return (
      <div className={this.state.visible ? "point of interest visible" : "pointofinterest"}>
        <h1>
          {pointofinterest.name}
          {pointofinterest.booking_info
            ? <a
                className="action-book"
                href={pointofinterest.booking_info.vendor_object_url}
                target="_blank"
              >
                Book
              </a>
            : ""}
        </h1>
        <Piece sections={pointofinterest.content.sections} />
        {pointofinterest.content.attribution
          ? <Origin sources={pointofinterest.content.attribution} />
          : ""}
      </div>
    );
  }
}