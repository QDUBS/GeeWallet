import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  form: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  pickerContainer: {
    width: "100%",
    // height: 55,
    borderWidth: 0,
    borderColor: "#ccc",
    borderWidth: 0.7,
    borderRadius: 10,
    color: "#000",
    paddingTop: 3,
    marginBottom: 15,
  },
  inputContainer: {
    width: "100%",
    // height: 55,
    borderWidth: 0,
    borderColor: "#ccc",
    borderWidth: 0.7,
    borderRadius: 10,
    color: "#000",
    paddingTop: 3,
    marginBottom: 15,
  },
  inputContainerLabel: {
    fontSize: 12,
    fontWeight: "400",
    color: "#666",
    paddingHorizontal: 10,
    position: "absolute",
    top: 5,
  },
  inputContainerInput: {
    height: 40,
    color: "black",
    paddingHorizontal: 10,
    marginTop: 8,
  },
  buttonContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginTop: 80,
  },
  button: {
    width: "100%",
    height: 45,
    backgroundColor: "black",
    borderRadius: 3,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
