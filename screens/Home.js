import { StatusBar, Linking } from "react-native";
import { Text, View, Image, useColorScheme } from "react-native";
import React from "react";
import styles from "../styles/screens/homeStyles";
import Constants from "expo-constants";

const icon = require("../assets/icon.png");

export default function Home({}) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const handleEmailPress = () => {
    const subject = "Fehlermeldung zu OTAlink";
    const recipient = "otalink@infernalestube.de";
    const body =
      "Sehr geehrtes OTAlink-Team, ich habe folgenden Fehler gefunden:";
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl);
  };

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
          {"\n"}Bitte melden Sie etwaige Fehler, Unstimmigkeiten oder
          Korrekturen unter der nachfolgenden E-Mail Adresse:
          <Text
            style={[styles.descriptionLink, themeTextStyle]}
            onPress={handleEmailPress}
          >
            {"\n"}otalink@infernalestube.de
          </Text>
        </Text>
        <Text style={[styles.description, themeTextStyle]}>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}App Version: {Constants.manifest.version}
        </Text>
      </View>
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#1D2935" : "#FFFFFF"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
    </View>
  );
}
