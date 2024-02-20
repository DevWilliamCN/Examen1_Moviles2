import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { style_01 } from '../styles/style_01';
import { getFirstGenerationPokemons } from '../components/getFirstGen';

const Home = ({ navigation }) => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
      const fetchPokemons = async () => {
        const pokemonsData = await getFirstGenerationPokemons();
        setPokemons(pokemonsData);
      };
  
      fetchPokemons();
    }, []);

 
    const renderPokemonItem = ({ item }) => (
        <TouchableOpacity style={style_01.itemContainer}>
          <Image
            source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png` }}
            style={style_01.pokemonImage}
          />
          <Text style={style_01.pokemonName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
        </TouchableOpacity>
      );
  return (
    <SafeAreaView style={style_01.container}>
      <View style={style_01.header}>
        <Image 
          source={require('../imgs/logoPM.png')} // Asegúrate de que la imagen está en la ruta correcta
          style={style_01.logoPM}
        />
      </View>
      {/* ... other navigation items ... */}
      <Text style={style_01.title1}>Primera Generacion </Text>
      <FlatList
        data={pokemons}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};


export default Home;
