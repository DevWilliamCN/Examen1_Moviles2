const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';
export const getFourthGen = async () => {
    try {
      const response = await fetch(`${POKE_API_URL}?offset=386&limit=107`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching fourth generation Pokémon:', error);
      return [];
    }
  };