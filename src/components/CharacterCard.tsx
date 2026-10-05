import React from 'react';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <span>{character.status}</span>
    </div>
  );
}