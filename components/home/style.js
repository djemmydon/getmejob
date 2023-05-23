import { StyleSheet } from "react-native";
import { FONT, COLORS } from "../../utils";

export const styles = StyleSheet.create({
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 40,
  },

  hamburgerLogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },

  navLogo: {
    fontSize: 28,
    color:  "#0c3b2e",
  },

  userIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#b46617",
    borderRadius: 100,
  },

  searchBody: {
    padding: 10,
    position: "relative",
    marginTop: 10,
  },

  searcInput: {
    backgroundColor: "#0101",
    height: 40,
    paddingLeft: 10,
    borderRadius: 20,
    fontSize: 16,
    color: "#0c3b2e",
  },

  searchIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 15,
  },

  headerText: {
    fontSize: 14,
  },

  featured: {
    overflow: "scroll",
    flexDirection: "row",
  },

  cardBody: {
    backgroundColor: "#0c3b2e",
    height: 200,
    width: 300,
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-around",
    marginHorizontal: 10,
  },

  cardHeader: {
    flexDirection: "row",
    color: "#000",
  },

  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  jobRequire: {
    flexDirection: "row",
    justifyContent: "center",

    gap: 10,
  },
  require: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#6d9773",
    marginHorizontal: 5,
    borderRadius: 20,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    fontSize: 10,
  },
});

// #ccfbff
// #ef96c5
