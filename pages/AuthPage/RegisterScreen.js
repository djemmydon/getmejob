import React from "react";
import { ScrollView, View } from "react-native";
import Register from "../../components/Auth/Register";

function RegisterScreen() {
  return (
    <View style={{marginTop:60}}>
      <ScrollView>
        <Register />
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;
