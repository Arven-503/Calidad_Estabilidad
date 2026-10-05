import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchCharacters } from '../api';

global.fetch = vi.fn();

describe('Servicio de API Rick and Morty', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('debe retornar la lista de personajes cuando la peticion es exitosa', async () => {
    const mockData = {
      results: [
        { id: 1, name: 'Rick Sanchez', status: 'Alive' }
      ]
    };

    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const data = await fetchCharacters();
    expect(data).toEqual(mockData.results);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  });

  it('debe lanzar un error cuando la peticion falla', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    await expect(fetchCharacters()).rejects.toThrow('Error al obtener los personajes');
  });
});