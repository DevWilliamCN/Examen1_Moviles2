const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';
export const getCuartaGeneracion= async () => {
    try {
      const response = await fetch(`${POKE_API_URL}?offset=386&limit=107`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Atencion Usuario error al recuperar Pokémon de Cuarta generación:', error);
      return [];
    }
  };