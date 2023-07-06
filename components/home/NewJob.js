import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import TextFont, {
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { useNavigation } from "@react-navigation/native";

function NewJob({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.NewJobCardBody}
      onPress={() =>
        navigation.navigate("JobDetails", {
          item: item,
        })
      }
    >
      <View style={styles.cardHeader}>
        {item?.employer_logo ? (
          <Image
            source={{ uri: item?.employer_logo }}
            style={styles.usercardImage}
          />
        ) : (
          <Image
            source={require("../../assets/testimonials1.jpg")}
            style={styles.usercardImage}
          />
        )}
        <View >
          <TextFont style={{ fontSize: 15, color: "#0F2851" }}>
            {item?.job_title}
          </TextFont>
          <TextFontLight style={{ fontSize: 15, color: "#717171" }}>
            {item?.employer_company_type}
          </TextFontLight>

          <View style={{ flexDirection: "row", alignItems:"center" }}>
            <Image
              source={require("../../assets/stars.png")}
              style={styles.startIcon}
            />
            <TextFontLight style={{ fontSize: 12, color: "#717171", marginTop:5 }}>
              4.5 | 177 Reviews
            </TextFontLight>
          </View>
        </View>
      </View>

      {/* <View style={styles.newJobRequire}>
        <View style={styles.require}>
          <TextFontLight style={{ fontSize: 12, color: "#fff" }}>
            {item?.job_address}
          </TextFontLight>
        </View>
        <View style={styles.require}>
          <TextFontLight style={{ fontSize: 12, color: "#fff" }}>
            {item?.job_is_remote ? "Remote" : "On-site"}
          </TextFontLight>
        </View>
        <View style={styles.require}>
          <TextFontLight style={{ fontSize: 12, color: "#fff" }}>
            Full-Tine
          </TextFontLight>
        </View>
      </View> */}
    </Pressable>
  );
}

export default NewJob;
