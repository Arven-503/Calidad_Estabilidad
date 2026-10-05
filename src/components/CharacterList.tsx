import React from 'react';
import CharacterCard from './CharacterCard';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0) {
    return <p>No se encontraron personajes</p>;
  }

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}