// Dependencies
import './App.css';
import React, { useState, useEffect } from 'react';

// Components
import CharList from './components/CharList';
import { SearchBox } from './components/SearchBox';
import { FilterOptions } from './components/FilterOptions';

function App() {
  const [filters, setFilters] = useState({
    search: '',
    Status: '',
    Gender: '',
    Species: ''
  }); // State containing all the filters
  const [pageNumber, setPageNumber] = useState(1); // State containing the page number
  const [chars, setChars] = useState([]); // State to store the character data from the API
  const [loading, setLoading] = useState(true); // State to store the loading status of the API call

  // Function to fetch the character data from the API on page load and when filter options are changed
  const getCharRequest = async (filters) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${filters.search}&status=${filters.Status}&gender=${filters.Gender}&species=${filters.Species}&page=${pageNumber}`;
    const res = await fetch(url);
    const resJson = await res.json();
    setChars(resJson.results); // Reset character data in the state
    setLoading(false);
  };

  // Function to fetch the character data from the API when scroll to bottom is reached
  const getPageIncRequest = async (filters, pageNumber) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${filters.search}&status=${filters.Status}&gender=${filters.Gender}&species=${filters.Species}&page=${pageNumber}`;
    const res = await fetch(url);
    const resJson = await res.json();
    setChars([...chars, ...resJson.results]); // Appending the next page's character data to the existing data
    setLoading(false);
  };

  // UseEffect triggered when filters are changed
  useEffect(() => {
    setPageNumber(1);
    getCharRequest(filters);
    // eslint-disable-next-line
  }, [filters]);

  // UseEffect triggered when page number is changed (scroll to bottom)
  useEffect(() => {
    getPageIncRequest(filters, pageNumber);
    // eslint-disable-next-line
  }, [pageNumber]);

  // Function to increment the page number when scroll to bottom is reached
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <div className="flex bg-tahiti min-h-screen font-mono flex-col flex-wrap items-center justify-start ">
      <div
        role="heading"
        className="md:text-4xl md:font-normal font-bold top-0 flex text-xl justify-center items-center uppercase m-4 md:m-10">
        Characters From Rick and Morty
      </div>
      <div className="flex flex-col md:flex-row my-5">
        <SearchBox filters={filters} setFilters={setFilters} />
        <FilterOptions filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-col md:flex-row justify-around flex-wrap container">
        {chars ? (
          <CharList chars={chars} />
        ) : (
          <div className="flex justify-center font-bold md:font-semibold text-xl mt-10">
            No Results
          </div>
        )}
        {loading && (
          <div className="w-full flex items-center justify-center text-2xl">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
