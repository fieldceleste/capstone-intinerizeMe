import React from "react";
import { observer } from "mobx-react";
import PointofInterest from "./PointofInterest";
import Portal from "./Portal";
import classNames from "classnames";
import "../style/pointofinterestitem.css";

class PointofInterestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      expanded: false
    };
  }
  componentDidMount() {
    if (this.props.displayLocation) {
      this.props.poi.fetchLocation().then(location => {
        if (location.isCity) location.fetchCountry();
      });
    }
  }

  findImage(object) {
    if (object.images && object.images.length) {
      if (object.images[0].sizes) {
        if (object.images[0].sizes.medium) return object.images[0].sizes.medium.url;
        if (object.images[0].sizes.thumbnail) return object.images[0].sizes.thumbnail.url;
      }
    }
    return "/static/demo/img/location_placeholder.jpg";
  }

  displayPortal = () => {
    return <PointofInterest PointofInterestId={this.props.pointofinterest.id} />;
  };

  actionOpen = event => {
    if (event) event.preventDefault();
    this.setState({ opened: true });
  };


  closedPortal = () => {
    this.setState({ opened: false });
  };

  render() {
    const { poi, bookUrl } = this.props;
    const classItem = classNames({
      "pointofinterest-item": true,
      "pointofinterest-item-visible": true,
      "pointofinterest-item-use-collapse": this.props.collapsed ? true : false,
      "pointofinterest-item-expanded": this.state.expanded
    });

    return (
      <div className={classItem}>
        <div
          className="pointofinterest-image"
          style={{ backgroundImage: `url('${this.findImage(poi)}')` }}
          onClick={() => {
            if (!this.props.collapsed) this.setState({ opened: true });
          }}
          onMouseOver={() => {
            poi.hover = true;
          }}
          onMouseOut={() => {
            poi.hover = false;
          }}
        >
          <h3>
            <a
              className="title"
              href="#0"
              onClick={event => {
                event.preventDefault();
                this.setState({ opened: true });
              }}
            >
              {poi.name}
            </a>
            <a
              className="expand"
              href="#0"
              onClick={event => {
                event.preventDefault();
                this.setState({ expanded: !this.state.expanded });
              }}
            >
              {!this.state.expanded
                ? <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                : <svg height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>}
            </a>
          </h3>
        </div>

        <h3>
          <a className="name" href="#0" onClick={this.actionOpen}>
            {poi.name}
          </a>

          {bookUrl
            ? <a href={bookUrl} className="action-book">
                book
              </a>
            : ""}
        </h3>
        {this.props.showLocation
          ? <h4>
              {poi.location ? poi.location.name : "Loading..."}
              {poi.location && poi.location.isCity
                ? poi.location.country
                  ? <span>
                      , {poi.location.country.name}
                    </span>
                  : <span>Loading ...</span>
                : ""}
            </h4>
          : ""}

        {this.state.open
          ? <Portal render={this.renderPortal} onClose={this.onClosePortal} />
          : ""}
      </div>
    );
  }
}

export default observer(PointofInterestItem);
