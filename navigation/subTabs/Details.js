import React from "react";
import { Text, View, useColorScheme, ScrollView } from "react-native";
import { format } from "date-fns";
import styles from "../../styles/screens/detailsStyles";

export default function Details({ route }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const operation = route.params?.operation;

  if (!operation) {
    return (
      <View
        style={[
          styles.container,
          themeContainerStyle,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <View>
          <Text style={[styles.loadingText, themeTextStyle]}>
            Bitte über die Sammlung einen Datensatz aufrufen um weitere
            Informationen angezeigt zu bekommen.
          </Text>
        </View>
      </View>
    );
  }

  const timestampDate = new Date(operation.zeitstempel);
  const formattedTimestamp = format(timestampDate, "dd.MM.yyyy - HH:mm");

  return (
    <ScrollView style={[styles.container, themeContainerStyle]}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, themeTextStyle]}>{operation.titel}</Text>
        </View>
        <Text style={[styles.detailsTitle, themeTextStyle]}>Beschreibung:</Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.beschreibung}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>Indikation:</Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.indikation}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>
          Komplikationen:
        </Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.komplikationen}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>Instrumente:</Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.siebeinstrumente}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>
          Abdeckung / Lagerung:
        </Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.abdeckungenlagerung}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>Ablauf:</Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.opablauf}
        </Text>
        <Text style={[styles.detailsTitle, themeTextStyle]}>
          Letzte Änderung:
        </Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {formattedTimestamp}
        </Text>
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
}
