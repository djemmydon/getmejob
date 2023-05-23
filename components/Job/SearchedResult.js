import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import TextFont, {
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SearchedResult({ item }) {
  const navigation = useNavigation();
  // console.log(item.employer_logo);

  return (
    <TouchableOpacity
      style={styles.searchedJobCard}
      onPress={() => navigation.navigate("JobDetails", {
        item: item
      })}
    >
      {item.employer_logo ?
      
      <Image
      source={{ uri: item.employer_logo }}
      style={styles.searchedCardImage}
        /> :
           <Image
        source={require("../../assets/download-logo.png")}
        style={styles.searchedCardImage}
      />

    }
   

      <TextFont style={{ fontSize: 16, color: "#fff" }}>
       {item.job_title}
      </TextFont>
      <TextFontMedium style={{ marginTop: 7, color: "#fff", fontSize: 10 }}>
       {item.job_city}
      </TextFontMedium>
      <TextFontMedium style={{ marginTop: 7, color: "#fff", fontSize: 10 }}>
      {item.job_is_remote ? "Remote" : "On site"}
      </TextFontMedium>
      <TextFontMedium
        style={{
          marginTop: 7,
          width: 70,
          backgroundColor: "#6d9773",
          color: "#ffba00",
          textAlign: "center",
          fontSize: 10,
        }}
      >
       {item.job_employment_type}
      </TextFontMedium>
      <TextFontLight style={{ marginTop: 7, color: "#fff", fontSize: 10 }}>
        Posted: 4 Days ago
      </TextFontLight>
      <MaterialIcons
        name="favorite-border"
        size={24}
        color="black"
        style={styles.fav}
      />
    </TouchableOpacity>
  );
}

export default SearchedResult;
