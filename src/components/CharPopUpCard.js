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
      <div className="bg-silver z-40 w-3/5 h-3/4 shadow-2xl rounded-sm">
        <div className="absolute bg-black h-1/4 w-3/5"></div>
        <div className="flex flex-col z-50 items-center text-center">
          <h1 className="relative w-full flex-none my-2 text-2xl font-semibold text-white">
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
          <div className="flex justify-between my-5 w-4/5 flex-row">
            <div className="w-full">
              <div className="font-semibold text-xl mb-5">Origin</div>
              <div className="mb-2 justify-">
                <span className="font-semibold">Place</span>:{" "}
                {props.char.origin.url ? originData.name : "Unknown"}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Dimension</span>:{" "}
                {props.char.origin.url ? originData.dimension : "Unknown"}
              </div>
              <div className="mb-5">
                <span className="font-semibold">No. of Residents</span>:{" "}
                {props.char.origin.url
                  ? originData.residents && originData.residents.length
                  : "Unknown"}
              </div>
            </div>

            <div className="bg-tahiti w-1 rounded-sm"></div>

            <div className="w-full flex flex-col">
              <div className="font-semibold text-xl mb-5">Current Location</div>
              <div className="mb-2">
                <span className="font-semibold">Place</span>:{" "}
                {props.char.location.url ? locationData.name : "Unknown"}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Dimension</span>:{" "}
                {props.char.location.url ? locationData.dimension : "N.A"}
              </div>
              <div className="mb-5">
                <span className="font-semibold">No. of Residents</span>:{" "}
                {props.char.location.url
                  ? locationData.residents && locationData.residents.length
                  : "Unknown"}
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-row">
            <button
              onClick={handlePopUpClose}
              className="px-4 h-8 flex justify-center items-center uppercase font-semibold tracking-wider border-2 border-black bg-tahiti hover:bg-white transition-all text-black"
            >
              Back
            </button>
            <button
              onClick={() => episodeOpen(props.char.episode)}
              className="px-4 ml-4 h-8 flex justify-center items-center uppercase font-semibold tracking-wider border-2 border-black bg-tahiti hover:bg-white transition-all text-black"
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
