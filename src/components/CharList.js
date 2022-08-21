import React, { useState } from "react";
import { CharPopUp } from "./CharPopUpCard";

const CharList = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState([]);

  const popUpToggle = (char) => {
    setPopUpData(char);
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      {props.chars.map((char, index) => (
        <div className="flex p-6 w-2/5 h-72 my-2 bg-silver font-mono">
          <div className="flex-none w-48 h-full mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-tahiti">
            <img
              className="absolute z-10 inset-0 h-full w-full object-cover"
              src={char.image}
              alt={char.name}
              loading="lazy"
            />
          </div>
          <div className="flex-auto justify-center flex flex-col items-center pl-6">
            <div className="relative flex flex-wrap w-full text-white items-baseline pb-4 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
              <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                {char.name}
              </h1>
            </div>

            <div className="flex items-baseline my-2">
              <div className="relative text-lg text-black">Species</div>
              <div className="relative font-semibold uppercase text-darkTahiti ml-5">
                {char.species}
              </div>
            </div>
            <div className="flex items-baseline my-2">
              <div className="relative text-lg text-black">Status</div>
              <div className="relative font-semibold uppercase text-darkTahiti ml-5">
                {char.status}
              </div>
            </div>
            <div className="flex items-baseline my-2">
              <div className="relative text-lg text-black">Gender</div>
              <div className="relative font-semibold uppercase text-darkTahiti ml-5">
                {char.gender}
              </div>
            </div>
            <button
              onClick={() => popUpToggle(char)}
              className="px-6 h-12  flex justify-center items-center uppercase font-semibold tracking-wider border-2 border-black bg-tahiti hover:bg-white transition-all text-black"
            >
              More Info
            </button>
          </div>
        </div>
      ))}
      <CharPopUp
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        char={popUpData}
      />
    </>
  );
};

export default CharList;
