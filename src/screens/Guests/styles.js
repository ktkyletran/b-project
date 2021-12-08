import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  age: {
    color: 'grey'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  value: {
    marginHorizontal: 15,
    fontSize: 18
  },
  button: {
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
  },
  btnText: {
    fontSize: 18,
  }, 
});

export default styles