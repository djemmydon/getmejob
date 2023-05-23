import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TextFont, {
  FormInputFont,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OpenModal from "../OpenModal";
import { COLORS } from "../../utils";

function Register() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [fontsLoaded] = useFonts({
    Poppin: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.bodyAuth}>
      <TextFontMedium
        style={{
          fontSize: 30,
          color: "#b46617",
        }}
      >
        Sign Up
      </TextFontMedium>
      <View style={styles.bodyAuthForm}>
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Name"
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Number"
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Email"
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Password"
        />
        <Entypo
          name="eye-with-line"
          size={24}
          color="black"
          style={styles.icons2}
        />
      </View>

      <View style={{ marginVertical: 10, flexDirection: "row" }}>
        <TextFontMedium>Already a member?</TextFontMedium>

        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{ justifyItems: "center" }}
        >
          <TextFontMedium style={{ paddingHorizontal: 5, color: "#b46617" }}>
            Login
          </TextFontMedium>
        </Pressable>
      </View>
      <BouncyCheckbox
        size={25}
        fillColor={COLORS.tertiary}
        unfillColor="#FFFFFF"
        textComponent={() => (
          <TextFontMedium style={{ color: "#000" }}>kddnjn</TextFontMedium>
        )}
        onPress={(isChecked) => {}}
      />

      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <TextFontMedium
          style={{ fontSize: 20, color: "#fff", textAlign: "center" }}
        >
          Sign Up
        </TextFontMedium>
      </Pressable>
      <Pressable style={styles.button2}>
        <TextFontMedium
          style={{ fontSize: 16, color: "#000", textAlign: "center" }}
        >
          Forgot Password
        </TextFontMedium>
      </Pressable>
      <OpenModal
        isOpen={modalVisible}
        setIsOpen={setModalVisible}
        text="Account Created Successfully"
      />
    </View>
  );
}

export default Register;
