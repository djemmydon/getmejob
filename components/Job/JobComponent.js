import React from "react";
import { Pressable, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { TextFontLight, TextFontMedium } from "../../assets/fonts/useThisFont";
import PopularJob from "./PopularJob";
import SearchedResult from "./SearchedResult";
import { useFetch } from "../../useFetch";

function JobComponent() {
  const navigation = useNavigation();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.searchBody}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />

        <View style={styles.search}>
          <TextInput placeholder="Search" style={styles.searcInput} />
          <AntDesign
            name="search1"
            size={20}
            color="black"
            style={styles.searchIcon}
          />
        </View>
      </View>

      {/* Filter */}
      <View style={styles.filter}>
        <Pressable style={styles.filterButton}>
          <TextFontMedium style={{ fontSize: 12, color: "#b46617" }}>
            All
          </TextFontMedium>
        </Pressable>
        <Pressable style={styles.filterButton}>
          <TextFontMedium style={{ fontSize: 12, color: "#b46617" }}>
            New
          </TextFontMedium>
        </Pressable>
      </View>

      {/* Most Popular */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
        style={{ marginTop: 10 }}
      >
        <PopularJob />
        <PopularJob />
        <PopularJob />
      </ScrollView>

      {/* Searched result */}

      <TextFontLight style={styles.headerText}>Featured</TextFontLight>

      <View style={styles.serchBody}>
        {data.map((item) => (
          <SearchedResult item={item} />
        ))}
      </View>
    </View>
  );
}

export default JobComponent;
