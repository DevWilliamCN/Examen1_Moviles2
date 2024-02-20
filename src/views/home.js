import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { style_01 } from "../styles/style_01";
import { getFirstGen } from "../components/getFirstGen";
import { getSecondGen } from "../components/getSecondGen";
import { getThirdGen } from "../components/getThirdGen";
import { getFourthGen } from "../components/getFourthGen";
import { getFifthGen } from "../components/getFifthGen";

const Home = ({ navigation }) => {
  const [pokemons, obtenerPokemon] = useState([]);
  const [generation, obtenerGen] = useState("First");

  useEffect(() => {
    buscaPokemon(generation);
  }, [generation]);

  const buscaPokemon = async (gen) => {
    switch (gen) {
      case "First":
        obtenerPokemon(await getFirstGen());
        break;
      case "Second":
        obtenerPokemon(await getSecondGen());
        break;
      case "Third":
        obtenerPokemon(await getThirdGen());
        break;
      case "Fourth":
        obtenerPokemon(await getFourthGen());
        break;
      case "Fifth":
        obtenerPokemon(await getFifthGen());
        break;
      default:
        obtenerPokemon([]);
        break;
    }
  };

  const renderPokemonItem = ({ item }) => (
    <TouchableOpacity
      style={style_01.itemContainer}
      onPress={() => navigation.navigate("PokeDetail", { pokemon: item })}
    >
      <Image
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png`,
        }}
        style={style_01.pokemonImage}
      />
      <Text style={style_01.pokemonName}>
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style_01.container}>
      <View style={style_01.header}>
        <Image source={require("../imgs/logoPM.png")} style={style_01.logoPM} />
      </View>
      <View style={style_01.navBar}>
        <TouchableOpacity onPress={() => obtenerGen("First")}>
          <Text style={style_01.navItem}>First gen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => obtenerGen("Second")}>
          <Text style={style_01.navItem}>Second gen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => obtenerGen("Third")}>
          <Text style={style_01.navItem}>Third gen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => obtenerGen("Fourth")}>
          <Text style={style_01.navItem}>Fourth gen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => obtenerGen("Fifth")}>
          <Text style={style_01.navItem}>Fifth gen</Text>
        </TouchableOpacity>
      </View>
      <Text style={style_01.title1}>{`${generation} Generation`}</Text>
      <FlatList
        data={pokemons}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default Home;
