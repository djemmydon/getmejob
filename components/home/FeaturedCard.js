import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import TextFont, {
  TextFontLight,
  TextFontMedium,
} from "../../assets/fonts/useThisFont";

function FeaturedCard() {
  return (
    <View style={styles.cardBody}>
      <View style={styles.cardHeader}>
        <Image
          source={require("../../assets/download-logo.png")}
          style={styles.cardImage}
        />
        <View>
          <TextFont style={{ fontSize: 18, color: "#fff" }}>
            Product Designer
          </TextFont>
          <TextFontLight style={{ fontSize: 12, color: "#ffbaoo" }}>
            Google
          </TextFontLight>
        </View>
      </View>

      <View style={styles.jobRequire}>
        <View style={styles.require}>
          <TextFontLight style={{ fontSize: 12, color: "#fff" }}>
            Administration
          </TextFontLight>
        </View>
        <View style={styles.require}>
          <TextFontLight style={{ fontSize: 12, color: "#fff" }}>
            Junior
          </TextFontLight>
        </View>
        <View style={styles.require}>
          <TextFontLight style={{ fontSize: 12, color: "#fff" }}>
            Full-Tine
          </TextFontLight>
        </View>
      </View>

      <View style={styles.price}>
        <TextFontMedium style={{ fontSize: 12, color: "#6d9773" }}>
          $100 / Year
        </TextFontMedium>
        <TextFontMedium style={{ fontSize: 12, color: "#6d9773" }}>
          Agodi Ibadan
        </TextFontMedium>
      </View>
    </View>
  );
}

export default FeaturedCard;
