import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CharacterList from '../CharacterList';

describe('Componente CharacterList', () => {
  const charactersMock = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    }
  ];

  it('debe renderizar un mensaje cuando no hay personajes en la lista', () => {
    render(<CharacterList characters={[]} />);

    expect(screen.getByText('No se encontraron personajes')).toBeInTheDocument();
  });

  it('debe renderizar la lista de tarjetas de personajes correctamente', () => {
    render(<CharacterList characters={charactersMock} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });
});