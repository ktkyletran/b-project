import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 60,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#606060',
  },
  description: {
    fontSize: 20,
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
    fontSize: 20
  },
});

export default styles;