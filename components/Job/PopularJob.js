import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { TextFontLight, TextFontMedium,  } from "../../assets/fonts/useThisFont";

function PopularJob() {
  return (
    <TouchableOpacity style={styles.popularJob}>
      <Image
        source={require("../../assets/download-logo.png")}
        style={styles.PopularCardImage}
      />

      <TextFontMedium  style={{color: "#B7BFCC", fontSize: 10}}>Senior React Developer Job</TextFontMedium>
      <TextFontMedium style={{marginTop: 5, color: "#585CE5", fontSize: 10}}>NGN100,000</TextFontMedium>
    </TouchableOpacity>
  );
}

export default PopularJob;
   