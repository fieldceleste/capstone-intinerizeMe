import React from "react";

import LoadingDisplay from "./LoadingDisplay";
import ArticleItem from "./ArticleItem";
import Origin from "./Origin";

import { requestApi } from "../ApiController";

import "../styles/PointofInterest.css";

export default class PointofInterest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poi: null
    };
  }

  componentDidMount() {
    requestApi (
      `poi.json?id=${this.props
        .poiId}&fields=name,id,content,score,booking_info`
    )
      .then(json => {
        this.setState({ poi: json.results[0] });
      })
      .catch(rejected => {
        console.log("REJECTED: ", rejected);
      });
  }

  render() {
    return (
      <div>
        {this.state.poi ? <PointofInterestBody poi={this.state.poi} /> : <LoadingDisplay />}
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
    const { poi } = this.props;

    return (
      <div className={this.state.visible ? "poi visible" : "poi"}>
        <h1>
          {poi.name}
          {poi.booking_info
            ? <a
                className="action-book"
                href={poi.booking_info.vendor_object_url}
                target="_blank"
              >
                Book
              </a>
            : ""}
        </h1>
        <ArticleItem sections={poi.content.sections} />
        {poi.content.attribution
          ? <Origin sources={poi.content.attribution} />
          : ""}
      </div>
    );
  }
}