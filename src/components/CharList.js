import React from "react";

const CharList = (props) => {
  return (
    <>
      {props.chars.map((char, index) => (
        <div className="m-3">
          <img src={char.image} alt={char.name} />
          {char.name}
        </div>
      ))}
    </>
  );
};

export default CharList;
