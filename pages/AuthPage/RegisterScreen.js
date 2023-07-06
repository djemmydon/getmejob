import React from "react";
import { ScrollView, View } from "react-native";
import Register from "../../components/Auth/Register";

function RegisterScreen() {
  return (
    <View style={{
      paddingTop: 60,
      backgroundColor: "#fff",
      height:"100%"
    }}>
      <ScrollView>
        <Register />
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;
