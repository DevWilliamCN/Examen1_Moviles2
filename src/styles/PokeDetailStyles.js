// PokeDetailStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFF00', 
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'yellow', 
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black', 
    marginBottom: 10,
  },
  features: {
    fontSize: 16,
    color: 'black', 
  },
  sectionContainer: {
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  type: {
    fontSize: 16,
    marginBottom: 4,
  },
  move: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default styles;
