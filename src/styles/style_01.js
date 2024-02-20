import {StyleSheet} from 'react-native';

export const style_01 = StyleSheet.create({
    btn_Home: {
    alignItems: 'center',
    backgroundColor: '#00D100',
    borderColor: '#000000',
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    width: '33%',
    },

    btn_Details: {
    alignItems: 'center',
    backgroundColor: '#FF7634',
    borderColor: '#000000',
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    width: '33%',
    },

    btn_About: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderColor: '#000000',
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    width: '33%',
    },

    btn_Label: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    },

    row: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
    
    cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5EEE6'
    },

    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', 
      borderRadius: 10, 
      padding: 10, 
      marginVertical: 5, 
      marginHorizontal: 10, 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, 
    },
    pokemonImage: {
      width: 50,
      height: 50,
      borderRadius: 25, 
      marginRight: 10, 
    },
    pokemonName: {
      fontSize: 18, 
      color: '#000', 
      
    },
    
    h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center'
    },

    referen01: {
        fontSize: 15,
        padding: 20,
        marginTop: -230,
        color: 'black',
      },
      
      referenNormal: {
        fontSize: 15,
        padding: 20,
        marginTop: -20,
        color: 'black',
      },
      
      containerRefe: {
        paddingTop: 10, 
      },

      imgRefe:{
        width: '100', 
        height: 200, 
        resizeMode: 'contain', 
     },

     pokemonImage: {
      width: 50, // Puedes ajustar esto como necesites
      height: 50,
     },

     background: {
        flex: 1,
        backgroundColor: '#f0f0f0', 
      },
      image: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        marginTop: 20,
    },
    paragraph: {
      fontSize: 16,
      color: '#000000',
      textAlign: 'justify',
      margin: 25,

      

  },

});