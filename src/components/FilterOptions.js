import React from 'react';

export const FilterOptions = (props) => {
  const types = {
    Gender: ['', 'Male', 'Female', 'Genderless', 'Unknown'],
    Status: ['', 'Dead', 'Alive', 'Unknown'],
    Species: ['', 'Human', 'Alien', 'Robot', 'Humanoid']
  };

  return (
    <div className="flex flex-row">
      {Object.keys(types).map((val, index) => {
        return (
          <div key={index} className="mx-4 p-1 ">
            <span className="font-semibold">{val}</span>
            <select
              className="p-1 ml-2 border-2 border-black rounded-sm"
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
