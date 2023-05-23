import { StyleSheet } from "react-native";
import { SHADOWS } from "../../utils";

export const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 50,
    alignContent: "center",
    justifyContent: "space-evenly",
  },

  settingItem: {
    width: 300,
    // height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 2,
    // borderWidth: 1,
    elevation: 1,
    padding: 10,
    margin: 5,
  },

  settingIn: {
    alignItems: "center",
  },
});
