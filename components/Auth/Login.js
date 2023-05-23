import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

import TextFont, {
  FormInputFont,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OpenModal from "../OpenModal";

function Login() {
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
          textAlign: "center",
          fontSize: 30,
          color: "#b46617",
        }}
      >
        Login
      </TextFontMedium>
      <View style={styles.bodyAuthForm}>
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
          style={styles.icons}
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TextFontMedium style={{}}>Don't have an account? </TextFontMedium>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ justifyItems: "center" }}
        >
          <TextFontMedium style={{ color: "#b46617" }}>Register</TextFontMedium>
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <TextFontMedium
          style={{ fontSize: 20, color: "#fff", textAlign: "center" }}
        >
          Login
        </TextFontMedium>
      </Pressable>
      <Pressable style={styles.button2} onPress={() => setModalVisible(true)}>
        <TextFontMedium
          style={{ fontSize: 16, color: "#000", textAlign: "center" }}
        >
          Forgot Password
        </TextFontMedium>
      </Pressable>

      <OpenModal
        isOpen={modalVisible}
        setIsOpen={setModalVisible}
        text="Login Successful"
      />
    </View>
  );
}

export default Login;
