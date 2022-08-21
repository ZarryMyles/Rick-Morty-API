// Component rendering the character grid based on filters and search box

import React, { useState } from 'react';
import { CharPopUp } from './CharPopUpCard';

const CharList = (props) => {
  // State to store the pop up card visibility status
  const [showPopUp, setShowPopUp] = useState(false);
  // State to store the character data to be displayed in the pop up card
  const [popUpData, setPopUpData] = useState([]);

  // Function to toggle pop up card visibility status
  const popUpToggle = (char) => {
    setPopUpData(char);
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      {props.chars.map((char, index) => (
        <div
          key={index}
          className="flex md:p-6 p-3 md:w-2/5 md:h-72 h-72 my-5 md:mx-0 mx-2 md:my-2 bg-silver font-mono">
          <div className="flex-none md:w-48 w-40 md:h-full mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-tahiti">
            <img
              className="absolute z-10 inset-0 h-full w-full object-cover"
              src={char.image}
              alt={char.name}
              loading="lazy"
            />
          </div>
          <div className="flex-auto justify-center flex flex-col items-center md:pl-6 pl-6">
            <div className="relative flex flex-wrap md:w-full text-white items-baseline pb-4 md:before:bg-black md:before:absolute md:before:-top-6 md:before:bottom-0 md:before:-left-60 md:before:-right-6">
              <h1 className="relative w-full flex-none mb-2 text-xl md:text-2xl md:pl-6 font-bold md:font-semibold md:text-white text-black">
                {char.name}
              </h1>
            </div>

            <div className="flex items-baseline my-2">
              <div className="relative text-lg text-black">Species</div>
              <div className="relative font-bold md:font-semibold uppercase text-darkTahiti ml-5">
                {char.species}
              </div>
            </div>
            <div className="flex items-baseline my-2">
              <div className="relative text-lg text-black">Status</div>
              <div className="relative font-bold md:font-semibold uppercase text-darkTahiti ml-5">
                {char.status}
              </div>
            </div>
            <div className="flex items-baseline my-2">
              <div className="relative text-lg text-black">Gender</div>
              <div className="relative font-bold md:font-semibold uppercase text-darkTahiti ml-5">
                {char.gender}
              </div>
            </div>
            <button
              onClick={() => popUpToggle(char)}
              className="px-6 h-12  flex justify-center items-center uppercase font-bold md:font-semibold tracking-wider border-2 border-black bg-tahiti hover:bg-white transition-all text-black">
              More Info
            </button>
          </div>
        </div>
      ))}
      {/* Character info pop up */}
      <CharPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} char={popUpData} />
    </>
  );
};

export default CharList;
