export async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  if (!response.ok) {
    throw new Error('Error al obtener los personajes');
  }
  const data = await response.json();
  return data.results;
}