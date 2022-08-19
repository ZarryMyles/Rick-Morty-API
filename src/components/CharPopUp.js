import React, { useState } from "react";

export const CharPopUp = (props) => {
  if (!props.showPopUp) return null;

  return (
    <div className="absolute top-0 opacity-30 bg-black">
      <div className="popup">
        <h1>{props.char.name}</h1>
      </div>
    </div>
  );
};
