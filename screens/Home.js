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
        <Text style={[styles.appName, themeTextStyle]}>OTAlink</Text>
      </View>
      <View>
        <Image
          source={icon}
          style={{ width: 120, height: 120, borderRadius: 18, marginTop: 50 }}
        />
      </View>
      <View>
        <Text style={[styles.description, themeTextStyle]}>
          Herzlich Willkommen bei OTAlink!{"\n"}
          {"\n"}Die mobile Datenbank für Operationsabläufe.{"\n"}
          {"\n"}Fehler oder neue Abläufe können per Mail an:
          otalink@infernalestube.de gesendet werden.{"\n"}
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
    marginLeft: 10,
    marginRight: 10,
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
