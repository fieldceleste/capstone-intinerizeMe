import React from "react";
import { requestApi } from "../ApiControls.js";
import Attribution from "./Attribution";

export default class Origin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: null
    };
  }

  componentDidMount() {
    this.fetchSource(this.props.origin);
  }

  fetchOrigin(origin) {
    requestApi(`source.json?id=${origin.origin_id}`).then(json => {     //may need to switch back to source
      let result = json.results[0];
      result.attribution_link = origin.url;
      this.setState({ origin: result });
    });
  }

  render() {
    return (
      <div className="origin">
        {this.state.origin
          ? <Attribution origin={this.state.origin} />
          : <span>Loading...</span>}
      </div>
    );
  }
}