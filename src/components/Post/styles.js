import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 20,

  },
  container: {
    margin: 20,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#606060',
  },
  description: {
    fontSize: 20,
    lineHeight: 26,
  },
  prices: {
    fontSize: 20,
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