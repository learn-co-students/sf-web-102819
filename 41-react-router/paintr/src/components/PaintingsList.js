import React from "react";
import PaintingListItem from "./PaintingListItem";

const PaintingsList = props => (
  <div className="ui narrow container">
    <div className="ui relaxed celled list">
      {props.paintings.map(painting => (
        <PaintingListItem
          selectPainting={props.selectPainting}
          painting={painting}
        />
      ))}
    </div>
  </div>
);

export default PaintingsList;
