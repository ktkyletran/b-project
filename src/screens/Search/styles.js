import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: 'white',
  },
  input: {
    fontSize: 18,
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
  iconContainer: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default styles;