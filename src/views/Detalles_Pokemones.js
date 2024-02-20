import React from "react";
import { SafeAreaView, View, Image, Text, ScrollView, StyleSheet } from "react-native";
import styles from "../styles/PokeDetailStyles";

// Aquí asumimos que tienes la imagen del Pokémon y los detalles de este en el objeto pokemon
const PokeDetail = ({ route }) => {
  const { pokemon } = route.params;

  // Esta es una simulación, debes reemplazarla con datos reales
  const pokemonInfo = {
    NombrePokemon: 'Butterfree',
    features: {
      Codigo: 12,
     Altura: 11,
      Peso: 320
    },
    types: ['bug', 'flying'],
    moves: ['razor-wind', 'gust', 'whirlwind', 'headbutt', 'tackle', 'take-down', 'double-edge'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
          <Image source={require("../imgs/logoPM.png")} style={styles.logo} />
        </View>
        <View style={styles.infoContainer}>
          <Image
            source={{ uri: `https://img.pokemondb.net/artwork/large/${pokemon.name.toLowerCase()}.jpg` }}
            style={styles.pokemonImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.NombrePokemon}>{pokemonInfo.NombrePokemon.toUpperCase()}</Text>
            <Text style={styles.features}> Características:</Text>
            <Text style={styles.features}> Codigo: {pokemonInfo.features.Codigo}</Text>
            <Text style={styles.features}> Altura: {pokemonInfo.features.Altura}</Text>
            <Text style={styles.features}> Peso: {pokemonInfo.features.Peso}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Types to Belong</Text>
          {pokemonInfo.types.map((type, index) => (
            <Text key={index} style={styles.type}>{type}</Text>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Movimientos</Text>
          {pokemonInfo.moves.map((move, index) => (
            <Text key={index} style={styles.move}>{move}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PokeDetail;