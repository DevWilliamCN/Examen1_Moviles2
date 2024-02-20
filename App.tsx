import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


import Home from './src/views/home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Detalles_Pokemones from './src/views/Detalles_Pokemones';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawNav() {
  return (
    <Drawer.Navigator 
    initialRouteName="Home"
    drawerContent={
      (props)=>{
        return(
          <SafeAreaView>
            <View
            style={{
              height:200,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: '#f4f4f4',
              borderBottomWidth: 1,
              backgroundColor: "#F3D7CA"
            }}>
           
    
            </View>
            <DrawerItemList {...props}/>
          </SafeAreaView>
        )
      }
    }>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="pokeDetail" component={ Detalles_Pokemones   }/>



    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="PokeDetail"
          component={Detalles_Pokemones}
          options={{ title: 'Pokémon Data' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}








export default App;