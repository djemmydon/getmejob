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
    color: "#0F2851",
  },

  userIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#ffff",
    borderRadius: 100,
  },

  searchBody: {
    padding: 10,
    position: "relative",
    marginTop: 10,
  },

  searcInput: {
    backgroundColor: "#ffff",
    borderColor: "#ffff",
    borderWidth: 0.5,
    height: 40,
    paddingLeft: 14,
    borderRadius: 20,
    fontSize: 16,
    color: "#ffff",
    justifyContent: "center",
  },

  searchIcon: {
    color: "#B7BFCC",

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
    fontSize: 20,
    color: "#0F2851",
  },

  featured: {
    overflow: "scroll",
    flexDirection: "row",
  },

  cardBody: {
    backgroundColor: "#5324FD",
    height: 200,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-around",

  },

  heroContent: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyItems: "center",
  },
  heroContentBody: {
    width: 150,
  },

  heroContentBodyImage: {
    width: 140,
    height: 200,
  },

  heroContentButton: {
    width: 80,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  cardHeader: {
    flexDirection: "row",
    color: "#000",
  },

  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 1,
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
    backgroundColor: "#000",
    opacity: 0.5,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    fontSize: 10,
  },

  newJob: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  // new job
  NewJobCardBody: {
    backgroundColor: "#ffff",
    marginVertical: 5,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-around",
  },
  newJobRequire: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    gap: 10,
  },

  usercardImage: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },

  startIcon: {
    width: 80,
    height: 30,
  },
});

// #ccfbff
// #ef96c5
