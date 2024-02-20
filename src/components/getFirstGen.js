// getFirstGen.js
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getFirstGenerationPokemons = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?limit=151`);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error('Error fetching first generation Pokémons:', error);
    return []; 
  }
};
