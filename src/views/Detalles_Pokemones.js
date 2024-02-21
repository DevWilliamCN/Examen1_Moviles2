import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import styles from "../styles/PokeDetailStyles";

const Detalles_Pokemones = ({ route }) => {
  const { pokemon } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  /*
   useEffect(() => {
  if (pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setPokemonDetails(data))
      .catch(error => console.error(error));
  }
}, [pokemonName]);

*/
  useEffect(() => {
    if (pokemon && pokemon.name) {
      const pokemonName = pokemon.name.toLowerCase();
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => setPokemonDetails(data))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [pokemon]);

   /*useEffect(() => {
     if (pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setPokemonDetails(data))
      .catch(error => console.error(error));
  }
  }, [pokemonName]);*/

  if (!pokemonDetails) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
      <Image source={require("../imgs/logoPM.png")} style={styles.logo} />
    </View>
        <View style={styles.infoContainer}>
          <Image
            source={{ uri: pokemonDetails.sprites.front_default }}
            style={styles.pokemonImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.NombrePokemon}>
              {pokemonDetails.name.toUpperCase()}
            </Text>
            <Text style={styles.features}> Features:</Text>
            <Text style={styles.features}> Code: {pokemonDetails.id}</Text>
            <Text style={styles.features}>
              {" "}
              Weight: {pokemonDetails.height}
            </Text>
            <Text style={styles.features}> Height: {pokemonDetails.weight}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Types to Belong</Text>
          {pokemonDetails.types.map((type, index) => (
            <Text key={index} style={styles.type}>
              {type.type.name}
            </Text>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Movimientos</Text>
          {pokemonDetails.moves.map((move, index) => (
            <Text key={index} style={styles.move}>
              {move.move.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detalles_Pokemones;
