import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "../style";
import {
  TextFontLight,
  TextFontMedium,
} from "../../../assets/fonts/useThisFont";
import { AntDesign } from "@expo/vector-icons";
import { useFetch } from "../../../useFetch";
import { useRoute } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    title: "Design and develop web applications using React",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Collaborate with UX/UI designers, backend developers, and product",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title:
      "managers to ensure seamless integration of web applications with backend systems",
  },
  {
    id: "58694a0f-3da1-471f-d96-145571e9d72",
    title:
      "Participate in code reviews and contribute to the teams coding standards",
  },
];

function JobDetails() {
  const {
    params: { item },
  } = useRoute();
  const [active, setActive] = React.useState(1);

  const changeState = (index) => {
    setActive(index);
  };
  return (
    <View>
      <View style={styles.descriptionHead}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          // onPress={() => navigation.navigate("Home")}
          style={{ color: "#fff", position: "absolute", top: 10, left: 10 }}
        />
        {item.employer_logo ? (
          <Image
            source={{ uri: item.employer_logo }}
            style={styles.descriptionImage}
          />
        ) : (
          <Image
            source={require("../../../assets/download-logo.png")}
            style={styles.descriptionImage}
          />
        )}
        <TextFontMedium
          style={{ color: "#fff", fontSize: 17, textAlign: "center" }}
        >
          {item.job_title}
        </TextFontMedium>
        <TextFontMedium style={{ color: "#fff", fontSize: 13 }}>
          {item.employer_name}
        </TextFontMedium>

        <View style={styles.jobRequire}>
          <View style={styles.require}>
            <TextFontLight style={{ fontSize: 15, color: "#fff" }}>
              {item.job_is_remote ? "Remote" : "On site"}
            </TextFontLight>
          </View>
          <View style={styles.require}>
            <TextFontLight
              style={{
                fontSize: 15,
                color: "#fff",
                textTranform: "capitalize",
              }}
            >
              {item.job_employment_type}
            </TextFontLight>
          </View>
          <View style={styles.require}>
            <TextFontLight style={{ fontSize: 15, color: "#fff" }}>
              Full-Tine
            </TextFontLight>
          </View>
        </View>

        <View style={styles.price}>
          <TextFontMedium
            style={{ fontSize: 15, color: "#fff", marginLeft: 10 }}
          >
            {item.job_max_salary &&
              ` $  ${item.job_max_salary
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} / Year`}
          </TextFontMedium>
          <TextFontMedium style={{ fontSize: 15, color: "#fff" }}>
            {item.job_city}
          </TextFontMedium>
        </View>
      </View>

      <View style={styles.activeTextBody}>
        <Pressable onPress={() => changeState(1)}>
          <TextFontLight
            style={
              active === 1
                ? styles.activeText
                : { color: "#6d9773", paddingHorizontal: 10, fontSize: 15 }
            }
          >
            Description
          </TextFontLight>
        </Pressable>
        <Pressable onPress={() => changeState(2)}>
          <TextFontLight
            style={
              active === 2
                ? styles.activeText
                : { color: "#6d9773", paddingHorizontal: 10, fontSize: 15 }
            }
          >
            Requirement
          </TextFontLight>
        </Pressable>
        <Pressable onPress={() => changeState(3)}>
          <TextFontLight
            style={
              active === 3
                ? styles.activeText
                : { color: "#6d9773", paddingHorizontal: 10, fontSize: 15 }
            }
          >
            About
          </TextFontLight>
        </Pressable>
        <Pressable onPress={() => changeState(4)}>
          <TextFontLight
            style={
              active === 4
                ? styles.activeText
                : { color: "#6d9773", paddingHorizontal: 10, fontSize: 15 }
            }
          >
            Review
          </TextFontLight>
        </Pressable>
      </View>
      <View>
        {active === 1 && (
          <View>
            <TextFontMedium
              style={{
                textDecorationColor: "#5324FD",
                marginHorizontal: 10,
                marginVertical: 5,
                fontSize: 13,
              }}
            >
              {item.job_description}
            </TextFontMedium>
          </View>
        )}
        {active === 2 && (
          <View>
            <TextFontLight>Nothing to Show </TextFontLight>
          </View>
        )}
        {/* {active === 3 && (
          <View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <TextFontMedium
                  style={{
                    textDecorationColor: "#5324FD",
                    marginHorizontal: 10,
                    marginVertical: 5,
                    fontSize: 13,
                  }}
                >
                  {`\u2022 ${item.title}`}
                </TextFontMedium>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        {active === 4 && (
          <View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <TextFontMedium
                  style={{
                    textDecorationColor: "#5324FD",
                    marginHorizontal: 10,
                    marginVertical: 5,
                    fontSize: 13,
                  }}
                >
                  {`\u2022 ${item.title}`}
                </TextFontMedium>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        )} */}

        <View style={{ alignItems: "center" }}>
          <Pressable style={styles.applyButton}>
            <TextFontMedium
              style={{ textAlign: "center", fontSize: 20, color: "#fff" }}
            >
              Apply Now
            </TextFontMedium>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default JobDetails;
