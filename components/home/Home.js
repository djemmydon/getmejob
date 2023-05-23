import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FeaturedCard from "./FeaturedCard";
import { FontAwesome } from "@expo/vector-icons";

import TextFont, {
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { useNavigation } from "@react-navigation/native";

function Home({ font }) {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.navbar}>
        <View style={styles.hamburgerLogo}>
          <EvilIcons name="navicon" size={32} color="#0c3b2e" />
          <TextFontMedium style={styles.navLogo}>JobMe</TextFontMedium>
        </View>

        <FontAwesome name="user-circle" size={25} color={"#000"} />
      </View>

      <View style={styles.searchBody}>
        <TextInput placeholder="Search" style={styles.searcInput} />
        <AntDesign
          name="search1"
          size={20}
          color="#0c3b2e"
          style={styles.searchIcon}
        />
      </View>

      {/*Featured Job  */}
      <View style={styles.header}>
        <TextFontLight style={styles.headerText}>Featured</TextFontLight>
        <Pressable
          style={styles.headerText}
          onPress={() => navigation.navigate("JobScreen")}
        >
          <TextFontLight style={styles.headerText}>See All</TextFontLight>
        </Pressable>
      </View>

      {/* Item */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
        style={{ marginTop: 20 }}
      >
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </ScrollView>
    </ScrollView>
  );
}

export default Home;
