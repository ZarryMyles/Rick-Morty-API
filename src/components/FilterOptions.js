import React from "react";

export const FilterOptions = (props) => {
  const types = {
    Gender: ["", "Male", "Female", "Genderless", "Unknown"],
    Status: ["", "Dead", "Alive", "Unknown"],
    Species: ["", "Human", "Alien", "Robot", "Humanoid"],
  };

  return (
    <div className="flex flex-col md:flex-row">
      {Object.keys(types).map((val, index) => {
        return (
          <div className="md:mx-4 md:p-1 p-2 md:block flex items-center justify-between">
            <span className="md:font-bold md:font-semibold w-1/4 md:w-auto font-bold md:mr-0 mr-8">
              {val}
            </span>
            <select
              className="md:p-1 p-2 w-3/4 md:w-auto md:ml-2 border-2 border-black rounded-sm"
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
