import React, { useState, useEffect } from "react";
import { CharEpList } from "./CharEpList";

export const CharPopUp = (props) => {
  const [originData, setOriginData] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const [showEpisodes, setShowEpisodes] = useState(false);
  const [episodeData, setEpisodeData] = useState([]);

  const handlePopUpClose = () => {
    props.setShowPopUp(false);
    setLocationData([]);
    setOriginData([]);
    setShowEpisodes(false);
  };

  const episodeOpen = (dat) => {
    setShowEpisodes(!showEpisodes);
    setEpisodeData(dat);
  };

  const getData = async () => {
    if (props.char.origin.url) {
      await fetch(props.char.origin.url)
        .then((res) => res.json())
        .then((data) => {
          setOriginData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (props.char.location.url) {
      await fetch(props.char.location.url)
        .then((res) => res.json())
        .then((data) => {
          setLocationData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (props.showPopUp) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showPopUp]);

  if (!props.showPopUp) return null;

  return (
    <div className="fixed top-0 left-0 z-30 w-screen h-screen flex items-center justify-center">
      <div
        onClick={handlePopUpClose}
        className="fixed w-screen min-h-screen bg-black opacity-60 top-0 left-0"
      ></div>
      <div className="bg-silver z-40 md:w-3/6 h-3/4 shadow-2xl rounded-sm">
        <div className="absolute bg-black h-1/4 md:w-1/2 w-full "></div>
        <div className=" flex flex-col z-50 items-center text-center">
          <h1 className="relative w-full flex-none md:my-2 my-4 text-2xl font-bold md:font-semibold text-white">
            {props.char.name}
          </h1>
          <div className="z-50 w-48 h-full border-4 border-tahiti rounded-sm">
            <img
              className="h-full w-full object-cover inset-0"
              src={props.char.image}
              alt={props.char.name}
              loading="lazy"
            />
          </div>
          <div className="flex justify-between my-5 md:px-0 px-3 md:w-4/5 flex-row">
            <div className="w-full md:mx-0 mx-2">
              <div className="font-bold md:font-semibold text-xl md:mb-5 mb-12">
                Origin
              </div>
              <div>
                {" "}
                <div className="mb-2 ">
                  <span className="font-bold md:font-semibold">Place</span>:{" "}
                  {props.char.origin.url ? originData.name : "Unknown"}
                </div>
                <div className="mb-2">
                  <span className="font-bold md:font-semibold">Dimension</span>:{" "}
                  {props.char.origin.url ? originData.dimension : "Unknown"}
                </div>
                <div className="mb-5">
                  <span className="font-bold md:font-semibold">
                    No. of Residents
                  </span>
                  :{" "}
                  {props.char.origin.url
                    ? originData.residents && originData.residents.length
                    : "Unknown"}
                </div>
              </div>
            </div>

            <div className="bg-tahiti w-1 rounded-sm"></div>

            <div className="w-full flex flex-col md:mx-0 mx-2">
              <div className="font-bold md:font-semibold text-xl mb-5">
                Current Location
              </div>
              <div className="mb-2">
                <span className="font-bold md:font-semibold">Place</span>:{" "}
                {props.char.location.url ? locationData.name : "Unknown"}
              </div>
              <div className="mb-2">
                <span className="font-bold md:font-semibold">Dimension</span>:{" "}
                {props.char.location.url ? locationData.dimension : "N.A"}
              </div>
              <div className="mb-5">
                <span className="font-bold md:font-semibold">
                  No. of Residents
                </span>
                :{" "}
                {props.char.location.url
                  ? locationData.residents && locationData.residents.length
                  : "Unknown"}
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-row">
            <button
              onClick={handlePopUpClose}
              className="px-4 h-8 flex justify-center items-center uppercase font-bold md:font-semibold tracking-wider border-2 border-black bg-tahiti hover:bg-white transition-all text-black"
            >
              Close
            </button>
            <button
              onClick={() => episodeOpen(props.char.episode)}
              className="px-4 ml-4 h-8 flex justify-center items-center uppercase font-bold md:font-semibold tracking-wider border-2 border-black bg-tahiti hover:bg-white transition-all text-black"
            >
              Episodes Featured in
            </button>
          </div>
        </div>
      </div>
      {showEpisodes && (
        <CharEpList
          episodes={episodeData}
          showEpisodes={showEpisodes}
          setShowEpisodes={setShowEpisodes}
        />
      )}
    </div>
  );
};
