import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { TextFontMedium } from "../assets/fonts/useThisFont";
import { COLORS } from "../utils";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function OpenModal({ isOpen, text, setIsOpen, pageRoute }) {
  const navigation = useNavigation();
  return (
    <Modal
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
      animationOut={"slideOutDown"}
      animationType="slide"
      transparent={true}
      backdropOpacity={0.7}
      animationIn="fadeIn"
      isVisible={isOpen}
    >
      <View style={styles.modalCenter}>
        <View style={styles.modalContent}>
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={90}
            color={COLORS.tertiary}
          />
          <TextFontMedium
            style={{
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {text}
          </TextFontMedium>

          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate(pageRoute);

              setIsOpen(!isOpen);
            }}
          >
            <TextFontMedium
              style={{
                fontSize: 20,
                color: "#fff",
                textAlign: "center",
                width: 100,
              }}
            >
              Ok
            </TextFontMedium>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default OpenModal;

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.tertiary,
    height: 40,
    width: 100,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center",
  },
  modalCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 20,
  },
});

// #ccfbff
// #ef96c5
