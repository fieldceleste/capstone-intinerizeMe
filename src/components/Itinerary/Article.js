import React from "react";
// import TriposoImage from "./TriposoImage";
import "../style/piece.css";

export default class Piece extends React.Component {
  render() {
    const { sections } = this.props;

    return (
      <div className="piece">
        {sections.map((item, n) => <PieceItem key={n} item={item} />)}
      </div>
    );
  }
}

class PieceItem extends React.Component {

  render() {
    const { item } = this.props;

    return (
      <div className="piece-item">
        {item.title ? <h2>{item.title}</h2> : ""}
        {/* {item.image ? <TriposoImage image={item.image} /> : ""} */}
        {item.body ? <p dangerouslySetInnerHTML={{ __html: item.body }} /> : ""}
      </div>
    );
  }
}
