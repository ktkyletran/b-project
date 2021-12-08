import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
    top: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    marginTop: 25,
    marginLeft: 25,
    top: 25,
    width: 200,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    marginHorizontal: 10,
    position: 'absolute',
    top: 50,
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
    backgroundColor: 'white',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;