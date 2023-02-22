import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const icon = require("../assets/icon.png");

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#ffff", fontSize: 40, marginTop: 40 }}>
          OTAlink
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View>
        <Text
          style={{
            color: "#ffff",
            fontSize: 20,
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
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
    backgroundColor: "#1D2935",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconContainer: {},
  icon: {
    width: 120,
    height: 120,
    borderRadius: 18,
    marginTop: 50,
  },
});
