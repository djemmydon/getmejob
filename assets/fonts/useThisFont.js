import { useFonts } from "expo-font";
import { StyleSheet, Text, TextInput } from "react-native";
import { COLORS, SHADOWS } from "../../utils";

const TextFont = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    Poppin: require("./Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export const TextFontMedium = ({ children, style, secureText }) => {
  const [fontsLoaded] = useFonts({
    PoppinMedium: require("./Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={[styles.textMedium, style]}>{children}</Text>;
};

export const TextFontLight = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    PoppinLight: require("./Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={[styles.textLight, style]}>{children}</Text>;
};

export const FormInputFont = ({
  style,
  placeholder,
  secureText,
  name,
  onChangeText,
}) => {
  const [fontsLoaded] = useFonts({
    PoppinForm: require("./Poppins-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TextInput
      secureTextEntry={secureText}
      placeholder={placeholder}
      style={[styles.formInput, style]}
      id={name}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppin",
  },
  textLight: {
    fontFamily: "PoppinLight",
  },
  textMedium: {
    fontFamily: "PoppinMedium",
  },

  formInput: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingHorizontal: 6,
    shadowColor: SHADOWS.small,
    // borderWidth: 1,
    backgroundColor: "#0000",
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontFamily: "PoppinForm",
    fontSize: 14,
  },
});

export default TextFont;
