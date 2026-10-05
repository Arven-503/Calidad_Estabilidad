export interface Character {
  id: number;
  name: string;
  status: string;
  species?: string;
  image?: string;
}

export function formatStatus(status: string): string {
  const normalizedStatus = status.toLowerCase();
  if (normalizedStatus === 'alive') {
    return 'status-alive';
  }
  if (normalizedStatus === 'dead') {
    return 'status-dead';
  }
  return 'status-unknown';
}

export function filterCharactersByName(characters: Character[], query: string): Character[] {
  if (!query) return characters;
  const lowerQuery = query.toLowerCase();
  return characters.filter((character) =>
    character.name.toLowerCase().includes(lowerQuery)
  );
}