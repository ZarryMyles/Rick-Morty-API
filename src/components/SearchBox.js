import React from 'react';

export const SearchBox = (props) => {
  return (
    <div>
      <input
        data-testid="search"
        placeholder="Search..."
        className="w-full md:mx-0 md:0 mb-3 md:p-1 p-3 border-2 placeholder:text-gray-800 text-black font-bold md:font-semibold border-black rounded-sm"
        value={props.value}
        onChange={(event) =>
          props.setFilters({ ...props.filters, search: event.target.value })
        }></input>
    </div>
  );
};
