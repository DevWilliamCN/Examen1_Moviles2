// getThirdGen.js
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getTerceraGeneracion = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?offset=251&limit=135`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Atencion Usuario error al recuperar Pokémon de tercera generación:', error);
    return [];
  }
};