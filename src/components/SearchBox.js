import React from "react";

export const SearchBox = (props) => {
  return (
    <div>
      <input
        placeholder="Search..."
        value={props.value}
        onChange={(event) =>
          props.setFilters({ ...props.filters, search: event.target.value })
        }
      ></input>
    </div>
  );
};
