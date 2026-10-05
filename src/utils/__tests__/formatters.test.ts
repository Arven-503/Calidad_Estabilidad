import { describe, it, expect } from 'vitest';
import { formatStatus, filterCharactersByName } from '../formatters';

describe('Funciones Utilitarias de Personajes', () => {
  it('debe retornar la clase de estado adecuada segun el estado del personaje', () => {
    expect(formatStatus('Alive')).toBe('status-alive');
    expect(formatStatus('Dead')).toBe('status-dead');
    expect(formatStatus('unknown')).toBe('status-unknown');
    expect(formatStatus('Other')).toBe('status-unknown');
  });

  it('debe filtrar personajes por nombre correctamente sin importar mayusculas', () => {
    const characters = [
      { id: 1, name: 'Rick Sanchez', status: 'Alive' },
      { id: 2, name: 'Morty Smith', status: 'Alive' },
      { id: 3, name: 'Summer Smith', status: 'Alive' }
    ];

    const result = filterCharactersByName(characters, 'rick');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Rick Sanchez');
  });

  it('debe retornar lista completa si el termino de busqueda esta vacio', () => {
    const characters = [
      { id: 1, name: 'Rick Sanchez', status: 'Alive' }
    ];

    const result = filterCharactersByName(characters, '');
    expect(result).toHaveLength(1);
  });
});