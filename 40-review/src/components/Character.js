import React from "react";

const Character = props => {
  return (
    <div onClick={() => props.handleCharClick(props.character)}>
      {props.character.name}
    </div>
  );
};

export default Character;
