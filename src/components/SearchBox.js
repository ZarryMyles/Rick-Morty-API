import React from "react";

export const SearchBox = (props) => {
  return (
    <div>
      <input
        placeholder="Search..."
        className="w-full p-1 border-2 placeholder:text-gray-800 text-black font-semibold border-black rounded-sm"
        value={props.value}
        onChange={(event) =>
          props.setFilters({ ...props.filters, search: event.target.value })
        }
      ></input>
    </div>
  );
};
