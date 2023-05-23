import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import TextFont, { TextFontLight } from "../../assets/fonts/useThisFont";
import { Feather } from '@expo/vector-icons';
function Profile() {
  return (
    <View style={styles.body}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FontAwesome name="user-circle" size={85} color={"#000"} />
        <TextFontLight>Peculiar Tech</TextFontLight>
      </View>

      <View style={styles.settingIn}>
        <TextFont>Edit Profile</TextFont>

        <View style={[styles.settingItem, styles.shadowProp]}>
          <View>
            <TextFont>Phone Number</TextFont>
            <TextFont style={{ color: "#0106" }}>09065192164</TextFont>
          </View>
          <FontAwesome name="pencil" size={24} color="#0106" />
        </View>
        <View style={[styles.settingItem, styles.shadowProp]}>
          <View>
            <TextFont>Phone Number</TextFont>
            <TextFont style={{ color: "#0106" }}>09065192164</TextFont>
          </View>
          <FontAwesome name="pencil" size={24} color="#0106" />
        </View>
        <View style={[styles.settingItem, styles.shadowProp]}>
          <View>
            <TextFont>Phone Number</TextFont>
            <TextFont style={{ color: "#0106" }}>09065192164</TextFont>
          </View>
          <FontAwesome name="pencil" size={24} color="#0106" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <TextFont style={{ fontSize: 20 }}>Logout</TextFont>
        <Feather name="arrow-right" size={25} color={"#000"} />
      </View>
    </View>
  );
}

export default Profile;
