import React from "react";
import Constants from "expo-constants";
import { Linking, Platform, Text, View, Image, useColorScheme } from "react-native";

import styles from "../../styles/screens/homeStyles";

const icon = require("../../assets/icon.png");

export default function Home({}) {
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const emailBody = () =>
  `Sehr geehrtes OTAlink-Team, ich habe folgendes Anliegen (bitte ankreuzen):

    [  ] Datenschutz-Anfrage
    [  ] Fehlermeldung (z.B. App Abstürze)
    [  ] Inhaltliche Korrektur
    [  ] OP-Ablauf einreichen
    [  ] Sonstiges

  Hardware und Software Informationen:
  App Version: ${Constants.manifest.version}
  Betriebssystem: ${Platform.OS} Version: ${Platform.Version}
  -----
  
`
  
  const handleEmailPress = () => {
    const subject = "OTAlink Anfrage";
    const recipient = "otalink@infernalestube.de";
    const body = emailBody();
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
      </View>
    </View>
  );
}
