import Image from 'next/image';
import React from 'react';
import { MdClose } from "react-icons/md";

// Component that displays character details in an overlay
const CharacterOverlay = ({ character, onClose }) => {
  const { id, name, status, species, gender, origin, location, image, episode } = character;
  // Function to extract episode numbers from URLs
  const getEpisodeNumber = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1]; // Return the last part of the URL
  };
   // Get the last three episodes
   const lastThreeEpisodes = episode.slice(-3).map(getEpisodeNumber);


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white hover:bg-blend-darken p-8 max-w-lg rounded-lg overflow-hidden">
        <button className="absolute z-50 top-0 right-0 m-4 text-black￼ hover:text-gray-700" onClick={onClose}>
        <MdClose fontSize='3em' />
        </button>
        <div className="text-center">
          <img src={image} alt={name} className="mx-auto lg:w-58 lg:h-58 sm:w:30 sm:h:30 rounded-full" />
          <h2 className="text-xl text-[#fff] bg-[#03B3EE] bg-opacity-90 h-10 flex items-center justify-center w-[60%] rounded-2xl font-bold mt-4">{name}</h2>
         
        </div>
        <div  className="text-[#03B3EE] rounded-2xl mt-6">
          <p ><span className="font-semibold">Status:</span> {status}</p>
          <p ><span className="font-semibold">Last Known Location:</span> {location?.name}</p>
          <p ><span className="font-semibold">Origin:</span> {origin?.name}</p>
          <p className="font-bold">{species} | {gender}</p>
          <div>
            <p className="font-semibold">Episodes:</p>
              {lastThreeEpisodes.map((ep, index) => (
                <span className='mr-[2px]' key={index}>{ep}</span>
              ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default CharacterOverlay;
