import "./App.css";
import React, { useState, useEffect } from "react";

// Components
import CharList from "./components/CharList";
import { SearchBox } from "./components/SearchBox";
import { FilterOptions } from "./components/FilterOptions";

function App() {
  const [chars, setChars] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    gender: "",
    species: "",
  });

  const getCharRequest = async (filters) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${filters.search}&status=${filters.status}&gender=${filters.gender}&species=${filters.species}`;

    const res = await fetch(url);
    const resJson = await res.json();

    setChars(resJson.results);
  };

  useEffect(() => {
    getCharRequest(filters);
  }, [filters]);

  return (
    <div className="flex bg-tahiti min-h-screen flex-col flex-wrap font-mono items-center justify-center ">
      <div className="md:text-4xl flex text-xl justify-center items-center uppercase h-44">
        Characters From Rick and Morty
      </div>
      <div>
        <SearchBox filters={filters} setFilters={setFilters} />
        <FilterOptions filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-row bg-bubble-gum justify-between flex-wrap container">
        {chars ? (
          <CharList chars={chars} />
        ) : (
          <div className="w-screen flex text-4xl justify-center items-center">
            No Results
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
