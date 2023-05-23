import { Dimensions, StyleSheet } from "react-native";
import { FONT, COLORS } from "../../utils";

var width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  searchBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    alignItems: "center",
  },

  search: {
    padding: 10,
    position: "relative",
    width: 300,
  },

  searcInput: {
    backgroundColor: "#0101",
    height: 40,
    paddingLeft: 10,
    borderRadius: 20,
    fontSize: 16,
  },

  searchIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },

  filter: {
    flexDirection: "row",
    gap: 30,
    margin: 10,
  },
  filterButton: {
    borderWidth: 1,
    paddingVertical: 1,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    borderColor: "#000",
  },

  // Popular Job

  popularJob: {
    width: 120,
    height: 120,
    backgroundColor: "#6d9773",
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },

  PopularCardImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
  },

  serchBody: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  searchedJobCard: {
    width: 300,
    padding: 20,
    backgroundColor: "#0c3b2e",
    borderRadius: 10,
    marginVertical: 5,
    position: "relative",
  },

  searchedCardImage: {
    width: 40,
    height: 40,
    marginBottom: 16,
    borderRadius: 10,
  },

  headerText: {
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 20,
  },

  fav: {
    color: "#ffba00",
    position: "absolute",
    top: 25,
    right: 15,
  },

  // Job Descriptions

  descriptionHead: {
    backgroundColor: "#0c3b2e",
    height: 270,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  descriptionImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    color: "#fff",
  },

  jobRequire: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
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

    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    width: width,
  },

  // TabNav
  activeTextBody: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
  },
  activeText: {
    paddingHorizontal: 10,
    fontSize: 15,
    borderBottomColor: "#6d9773",
    borderBottomWidth:1
  },

  NotActiveText: {
    paddingHorizontal: 10,

  },

  applyButton: {
    width: 300,
    height: 40,
    backgroundColor: "#0c3b2e",
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
  },
});

// #ccfbff
// #ef96c5
