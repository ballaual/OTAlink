import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";

const icon = require("../assets/icon.png");

export default function Home({}) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View>
        <Text style={[styles.text, styles.appName, themeTextStyle]}>
          OTAlink
        </Text>
      </View>
      <View>
        <Image
          source={icon}
          style={{ width: 120, height: 120, borderRadius: 18, marginTop: 50 }}
        />
      </View>
      <View>
        <Text style={[styles.text, styles.description, themeTextStyle]}>
          Herzlich Willkommen bei OTAlink!{"\n"}
          {"\n"}Zeile 2 Beschreibung.{"\n"}
          {"\n"}Zeile 3 Beschreibung.{"\n"}
          {"\n"}Zeile 4 Beschreibung.{"\n"}
          {"\n"}Zeile 5 Beschreibung.{"\n"}
          {"\n"}Zeile 6 Beschreibung.
        </Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appName: {
    marginTop: 40,
    fontSize: 40,
  },
  description: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 20,
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
