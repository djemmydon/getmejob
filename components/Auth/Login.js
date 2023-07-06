import React, { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
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
import useForm from "../../hooks/useForm";
import validateForm from "../../hooks/validateForm";

function Login() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  // useForm Hooks
  const { values, handleChange, handleSubmitLogin, error, isLoading, resData } =
    useForm(validateForm);

  // text font
  const [fontsLoaded] = useFonts({
    Poppin: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.bodyAuth, { marginVertical: 40 }]}>
      <TextFont
        style={{
          textAlign: "center",
          fontSize: 30,
          color: "#5324FD",
          textTransform: "uppercase",
        }}
      >
        Login
      </TextFont>
      <View style={styles.bodyAuthForm}>
        {error.password && (
          <TextFontMedium style={{ color: "#B00020" }}>
            {error.password}
          </TextFontMedium>
        )}
        {error.email && (
          <TextFontMedium style={{ color: "#B00020" }}>
            {error.email}
          </TextFontMedium>
        )}

        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Email"
          value={values.name}
          onChangeText={handleChange("email")}
          secureText={false}
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Password"
          secureText={true}
          value={values.name}
          onChangeText={handleChange("password")}
        />
        {/* <Entypo
          name="eye-with-line"
          size={24}
          color="black"
          style={styles.icons}
        /> */}
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TextFontMedium style={{}}>Don't have an account? </TextFontMedium>
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ justifyItems: "center" }}
        >
          <TextFontMedium style={{ color: "#6d9773" }}>Register</TextFontMedium>
        </Pressable>
      </View>

      <Pressable style={styles.button} onPress={handleSubmitLogin}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <TextFontMedium
            style={{ fontSize: 20, color: "#fff", textAlign: "center" }}
          >
            Login
          </TextFontMedium>
        )}
      </Pressable>
      <Pressable style={styles.button2} onPress={() => setModalVisible(true)}>
        <TextFontMedium
          style={{ fontSize: 16, color: "#000", textAlign: "center" }}
        >
          Forgot Password
        </TextFontMedium>
      </Pressable>

      <OpenModal
        isOpen={resData}
        setIsOpen={setModalVisible}
        text="Login Successful"
        pageRoute="Home"
      />
    </View>
  );
}

export default Login;
