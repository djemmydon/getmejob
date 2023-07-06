import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import TextFont, {
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";

function FeaturedCard() {
  return (
    <View style={styles.cardBody}>
      <View style={styles.heroContent}>
        <View style={styles.heroContentBody}>
          <TextFont style={{ color: "#fff", fontSize: 20 }}>
            Connect Your Bussiness With People
          </TextFont>
          <TextFontLight style={{ color: "#fff", fontSize: 12 }}>
            Connect Your Bussiness With Right Minded People
          </TextFontLight>
          <Pressable style={styles.heroContentButton}>
            <TextFontMedium style={{ color: "#585CE5", fontSize: 12 }}>
              Start Now
            </TextFontMedium>
          </Pressable>
        </View>
        <View>
          <Image
            source={require("../../assets/header.png")}
            style={styles.heroContentBodyImage}
          />
        </View>
      </View>
    </View>
  );
}

export default FeaturedCard;
