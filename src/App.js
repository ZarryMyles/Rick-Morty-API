import "./App.css";
import React, { useState, useEffect } from "react";

// Components
import CharList from "./components/CharList";
import { SearchBox } from "./components/SearchBox";

function App() {
  const [chars, setChars] = useState([]);
  const [search, setSearch] = useState("");

  const getCharRequest = async (search) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;

    const res = await fetch(url);
    const resJson = await res.json();

    setChars(resJson.results);
  };

  useEffect(() => {
    getCharRequest(search);
  }, [search]);

  return (
    <div className="flex bg-tahiti min-h-screen flex-col flex-wrap font-mono items-center justify-center ">
      <div className="md:text-4xl flex text-xl justify-center items-center uppercase h-44">
        Characters From Rick and Morty
      </div>
      <div>
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <div className="flex flex-row bg-bubble-gum justify-between flex-wrap container">
        <CharList chars={chars} />
      </div>
    </div>
  );
}

export default App;
