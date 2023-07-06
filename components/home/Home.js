import React from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FeaturedCard from "./FeaturedCard";
import NewJob from "./NewJob";
import { FontAwesome } from "@expo/vector-icons";

import TextFont, {
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";
import { useNavigation } from "@react-navigation/native";
import { useFetch } from "../../useFetch";

function Home({ font }) {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("job");

  return (
    <ScrollView>
      <View style={styles.navbar}>
        <View style={styles.hamburgerLogo}>
          <EvilIcons name="navicon" size={32} color="#585CE5" />
        </View>
        <TextFontMedium style={styles.navLogo}>JobMe</TextFontMedium>

        <FontAwesome name="user-circle" size={25} color={"#585CE5"} />
      </View>

      <View style={styles.searchBody}>
        <Pressable
          placeholder="Search"
          style={styles.searcInput}
          onPress={() => navigation.navigate("JobScreen")}
        >
          <TextFontLight style={{ color: "#B7BFCC" }}>Search...</TextFontLight>
        </Pressable>
        <AntDesign
          name="search1"
          size={20}
          color="#B7BFCC"
          style={styles.searchIcon}
        />
      </View>

      {/*Featured Job  */}
      <View style={styles.header}>
        <TextFontMedium style={styles.headerText}>Featured</TextFontMedium>
        <Pressable
          style={styles.headerText}
          onPress={() => navigation.navigate("JobScreen")}
        >
          <TextFontMedium style={{ color: "#585CE5" }}>See All</TextFontMedium>
        </Pressable>
      </View>

      {/* Item */}
      <ScrollView
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // bounces={true}
        style={{
          marginTop: 10,
          marginHorizontal:5
        }}
      >
        <FeaturedCard />
      </ScrollView>

      <View style={styles.newJob}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <TextFontMedium style={{ fontSize: 16 }}>
            Top Proffessionals
          </TextFontMedium>

          <TextFontMedium style={{ fontSize: 14, color: "#585CE5" }}>
            View All
          </TextFontMedium>
        </View>

        <View>
          {data.map((item) => (
            <NewJob item={item} key={item._id} />
          ))}
          <NewJob />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
