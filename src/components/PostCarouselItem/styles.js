import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  container: {
    height: 120,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  }, 
  bedrooms: {
    marginVertical: 10,
    color: '#606060',
  },
  description: {
    fontSize: 14,
  },
  prices: {
    fontSize: 16,
    marginVertical: 12

  },
  oldPrice: {
    color: '#606060',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold'
  },
  totalPrice: {
    textDecorationLine: 'underline',
    color: '#606060',
  },
});

export default styles;