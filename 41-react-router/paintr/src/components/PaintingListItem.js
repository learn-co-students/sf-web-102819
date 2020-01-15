import React from "react";

const PaintingListItem = props => (
  <div className="item" onClick={() => props.selectPainting(props.painting.id)}>
    <div className="content">
      <h2>{props.painting.title}</h2>
      <em>
        {props.painting.artist.name}·{props.painting.date}
      </em>
    </div>
  </div>
);

export default PaintingListItem;
