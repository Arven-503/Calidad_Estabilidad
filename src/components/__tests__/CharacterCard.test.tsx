import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CharacterCard from '../CharacterCard';

describe('Componente CharacterCard', () => {
  const characterMock = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };

  it('debe renderizar el nombre, especie y estado del personaje', () => {
    render(<CharacterCard character={characterMock} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
  });

  it('debe renderizar la imagen con el atributo alt correspondiente', () => {
    render(<CharacterCard character={characterMock} />);

    const image = screen.getByAltText('Rick Sanchez');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', characterMock.image);
  });
});