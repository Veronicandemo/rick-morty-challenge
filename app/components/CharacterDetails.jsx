'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const CharacterDetails = ({ characterId }) => {
  const [character, setCharacter] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const data = await response.json();
        setCharacter(data);
        setBackgroundColor(`bg-${Math.floor(Math.random() * 9) + 1}00`);
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchCharacterDetails();
  }, [characterId]);

  if (!character) {
    return <div className="text-center py-4">Loading...</div>;
  }

  const { name, status, species, gender, origin, location, image, episode } = character;

  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
      <Image className="w-32 h-32 rounded-full mx-auto mb-4" src={image} alt={name} />
      <div className="text-center">
        <p className="text-lg font-bold">{name}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Location: {location.name}</p>
        <p>First Episode: {episode[0]?.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
