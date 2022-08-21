// Component to render filter options and change the filters state when the filter dropdowns are changed

import React from 'react';

export const FilterOptions = (props) => {
  // Constant containing the filters and their dropdown options
  const types = {
    Gender: ['', 'Male', 'Female', 'Genderless', 'Unknown'],
    Status: ['', 'Dead', 'Alive', 'Unknown'],
    Species: ['', 'Human', 'Alien', 'Robot', 'Humanoid']
  };

  return (
    <div data-testid="filters" className="flex md:flex-row flex-col ">
      {Object.keys(types).map((val, index) => {
        return (
          <div key={index} className="mx-4 md:p-1 p-2 md:block flex justify-between items-center">
            <span className="font-bold md:font-semibold">{val}</span>
            <select
              className="p-1 md:ml-2 ml-5 border-2 border-black rounded-sm"
              name={val}
              key={index}
              onChange={(event) =>
                props.setFilters({
                  ...props.filters,
                  [val]: event.target.value
                })
              }>
              {types[val].map((type, index) => {
                return (
                  <option key={index} value={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
};
