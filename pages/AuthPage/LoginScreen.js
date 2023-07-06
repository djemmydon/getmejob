import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Login from "../../components/Auth/Login";

function LoginScreen() {
  return (
    <View
      style={{
        paddingTop: 50,
        justifyContent: "center",
        backgroundColor: "#fff",
        height:"100%"
      }}
    >
      <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
        <Login />
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
