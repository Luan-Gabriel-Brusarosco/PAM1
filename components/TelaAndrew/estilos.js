import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2e2d',
    padding: 15,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
  },
  titulo: {
    fontSize:26,
    fontWeight: "bold",
    color: '#107c0f',
    marginBottom: 5,
  },

  card: {
    width: 250,
    alignItems: "center",
    backgroundColor: '#107c0f',
    flexDirection: "row",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginBottom: 10,
    marginRight: 10,
  },
  
  cardTexto: {
    fontSize: 18,
    color: '#fff',
    textAlign: "left",
    width: 100,
  },
});

export default styles;