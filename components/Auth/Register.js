import React, { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TextFont, {
  FormInputFont,
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OpenModal from "../OpenModal";
import { COLORS } from "../../utils";
import useForm from "../../hooks/useForm";
import validateForm from "../../hooks/validateForm";

function Register() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const { values, handleChange, handleSubmitRegister, error, isLoading } =
    useForm(validateForm);

  const [fontsLoaded] = useFonts({
    Poppin: require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.bodyAuth}>
      <TextFont
        style={{
          fontSize: 30,
          color: "#5324FD",
          textTransform: "uppercase",
        }}
      >
        Sign Up
      </TextFont>
      <View>
        {error.name && (
          <TextFontLight style={{ color: "#ff9414" }}>
            {error.name}
          </TextFontLight>
        )}
        {error.phone && (
          <TextFontLight style={{ color: "#ff9414" }}>
            {error.phone}
          </TextFontLight>
        )}
        {error.password && (
          <TextFontLight style={{ color: "#ff9414" }}>
            {error.password}
          </TextFontLight>
        )}
        {error.email && (
          <TextFontLight style={{ color: "#ff9414" }}>
            {error.email}
          </TextFontLight>
        )}
      </View>
      <View style={styles.bodyAuthForm}>
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Name"
          value={values.name}
          onChangeText={handleChange("name")}
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Number"
          value={values.name}
          onChangeText={handleChange("phone")}
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Email"
          value={values.name}
          onChangeText={handleChange("email")}
        />
        <FormInputFont
          style={styles.formInput && { fontFamily: "Poppin" }}
          placeholder="Enter Your Password"
          secureText={true}
          value={values.name}
          onChangeText={handleChange("password")}
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
          <TextFontMedium style={{ paddingHorizontal: 5, color: "#6d9773" }}>
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

      {isLoading ? (
        <Pressable style={styles.button} onPress={handleSubmitRegister}>
          <ActivityIndicator size="large" color="#fff" />
        </Pressable>
      ) : (
        <Pressable style={styles.button} onPress={handleSubmitRegister}>
          <TextFontMedium
            style={{ fontSize: 20, color: "#fff", textAlign: "center" }}
          >
            Sign Up
          </TextFontMedium>
        </Pressable>
      )}
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
