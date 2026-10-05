import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchBar from '../SearchBar';

describe('Componente SearchBar', () => {
  it('debe renderizar el campo de texto con el placeholder correcto', () => {
    render(<SearchBar value="" onChange={() => {}} />);

    const input = screen.getByPlaceholderText('Buscar personaje...');
    expect(input).toBeInTheDocument();
  });

  it('debe llamar a la funcion onChange cuando el usuario escribe', () => {
    const handleChange = vi.fn();
    render(<SearchBar value="" onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Buscar personaje...');
    fireEvent.change(input, { target: { value: 'Morty' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});