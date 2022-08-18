import React from "react";

export const SearchBox = (props) => {
  return (
    <div>
      <input
        placeholder="Search..."
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}
      ></input>
    </div>
  );
};
