import React from "react";
import { Text, View, useColorScheme, ScrollView } from "react-native";
import styles from "../styles/screens/detailsStyles";

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

  return (
    <ScrollView style={[styles.container, themeContainerStyle]}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, themeTextStyle]}>{operation.title}</Text>
        </View>
        <View style={[styles.descriptionContainer, themeContainerStyle]}>
          <Text style={[styles.detailsTitle, themeTextStyle]}>
            Beschreibung:
          </Text>
          <Text style={[styles.description, themeTextStyle]}>
            {operation.description}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={[styles.detailsTitle, themeTextStyle]}>Indikation:</Text>
          <Text style={[styles.detailsText, themeTextStyle]}>
            {operation.indication}
          </Text>
          <View style={styles.separator} />
          <Text style={[styles.detailsTitle, themeTextStyle]}>
            Komplikationen:
          </Text>
          <Text style={[styles.detailsText, themeTextStyle]}>
            {operation.complications}
          </Text>
          <View style={styles.separator} />
          <Text style={[styles.detailsTitle, themeTextStyle]}>
            Instrumente:
          </Text>
          <Text style={[styles.detailsText, themeTextStyle]}>
            {operation.instruments}
          </Text>
        </View>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>Ablauf:</Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.process}
        </Text>
      </View>
    </ScrollView>
  );
}
