import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Collection() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeTextInputStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeTextInput;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const navigation = useNavigation();

  const buttons = [
    { id: "1", title: "Allgemeinchirurgie", screen: "Allgemeinchirurgie" },
    { id: "2", title: "Gefäßchirurgie", screen: "Gefäßchirurgie" },
    { id: "3", title: "Gynäkologie", screen: "Gynäkologie" },
    { id: "4", title: "Kardiochirurgie", screen: "Kardiochirurgie" },
    { id: "5", title: "Kinderchirurgie", screen: "Kinderchirurgie" },
    { id: "6", title: "Neurochirurgie", screen: "Neurochirurgie" },
    { id: "7", title: "Orthopädie", screen: "Orthopädie" },
    { id: "8", title: "Sonstiges", screen: "Sonstiges" },
    { id: "9", title: "Unfallchirurgie", screen: "Unfallchirurgie" },
    { id: "10", title: "Urologie", screen: "Urologie" },
  ];

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={styles.buttonTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <FlatList
        data={buttons}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 20,
    backgroundColor: "#1D2935",
    borderRadius: 10,
    width: "40%",
    height: 100,
  },
  buttonTitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#1D2935",
  },
  lightThemeText: {
    color: "#000000",
  },
  darkThemeText: {
    color: "#FFFFFF",
  },
});
