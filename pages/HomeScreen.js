import React, { useCallback } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Home from "../components/home/Home";
import { useFonts } from "expo-font";

function HomeScreen() {

  return (
    <SafeAreaView>
      <ScrollView>
        <Home font="Popin" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
