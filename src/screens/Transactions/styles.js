import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  homeHeader: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingTop: "14%",
  },
  navbar: {
    backgroundColor: "#900",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile__pic: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginTop: -5,
    shadowColor: "#52006A",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  homeSearchContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: 45,
    borderRadius: 5,
    borderWidth: 0,
    color: "#000",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 0.7,
  },
  homeSearchInput: {
    flex: 1,
  },
  content: {
    marginVertical: 20
  }
});
