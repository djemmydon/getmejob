import { StyleSheet } from "react-native";
import { FONT, COLORS, SHADOWS } from "../../utils";

export const styles = StyleSheet.create({
  bodyAuth: {
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  bodyAuthForm: {
    alignItems: "center",
    justifyContent: "center",
    positione: "relative",
  },

  button: {
    backgroundColor: COLORS.tertiary,
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
  },
  button2: {
    height: 30,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
  },

  icons: {
    position: "absolute",
    right: 10,
    top: 90,
    color: COLORS.gray,
  },
  icons2: {
    position: "absolute",
    right: 10,
    top: 230,
    color: COLORS.gray,
  },

  modalCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },


});

// #ccfbff
// #ef96c5
