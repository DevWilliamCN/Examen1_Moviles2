const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

export const PrimeraGeneracion = async () => {
  try {
    const response = await fetch(`${POKE_API_URL}?offset=493&limit=156`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(
      "Atencion Usuario error al recuperar Pokémon de Primera generación:",
      error
    );
    return [];
  }
};
