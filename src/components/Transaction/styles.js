import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: 'lightgrey',
    borderWidth: 0.9,
    borderRadius: 7,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  id: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
  },
  amount: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 10,
  },
  time: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#a1705a',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    margin: 5,
  },
});
