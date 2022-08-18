import React from "react";

export const FilterOptions = (props) => {
  const types = {
    gender: ["", "Male", "Female", "Genderless", "Unknown"],
    status: ["", "Dead", "Alive", "Unknown"],
    species: ["", "Human", "Alien"],
  };

  return (
    <div className="flex flex-row">
      {Object.keys(types).map((val, index) => {
        return (
          <div className="mx-4">
            {val}
            <select
              name={val}
              key={index}
              onChange={(event) =>
                props.setFilters({
                  ...props.filters,
                  [val]: event.target.value,
                })
              }
            >
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
