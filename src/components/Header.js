import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import colors from "../utils/globals/colors";

const Header = ({ title = "Ecommerce" }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Ionicons
          name={Platform.OS === "ios" ? "ios-arrow-back" : "arrow-back-outline"}
          size={24}
          color="black"
        />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
      <Ionicons
        name={Platform.OS === "ios" ? "ios-cart" : "cart-outline"}
        size={24}
        color="black"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellowPage,
    height: 80,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
