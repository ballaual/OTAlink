import React from "react";
import { Text, View, useColorScheme, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/screens/collectionStyles";
import { lightStyles, darkStyles } from "../../styles/appStyles";

export default function Collection() {
  const colorScheme = useColorScheme?.() || "light";
  const appStyles = colorScheme === "light" ? lightStyles : darkStyles;
  
  const navigation = useNavigation();

  const buttons = [
    { id: "1", title: "Allgemeinchirurgie", screen: "Allgemeinchirurgie" },
    { id: "2", title: "Gefäßchirurgie", screen: "Gefäßchirurgie" },
    { id: "3", title: "Gynäkologie", screen: "Gynäkologie" },
    { id: "4", title: "Kardiochirurgie", screen: "Kardiochirurgie" },
    { id: "5", title: "Kinderchirurgie", screen: "Kinderchirurgie" },
    { id: "6", title: "Neurochirurgie", screen: "Neurochirurgie" },
    { id: "7", title: "Orthopädie", screen: "Orthopädie" },
    { id: "8", title: "Unfallchirurgie", screen: "Unfallchirurgie" },
    { id: "9", title: "Urologie", screen: "Urologie" },
    { id: "10", title: "Sonstiges", screen: "Sonstiges" },
  ];

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.buttonContainer, appStyles.background]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={[styles.buttonTitle, appStyles.text]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, appStyles.background]}>
      <Text style={[styles.headerText, appStyles.text]}>
        Bitte wählen Sie einen Fachbereich aus, um für diesen OP-Abläufe
        angezeigt zu bekommen.
      </Text>
      <FlatList
        data={buttons}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderButton}
        contentContainerStyle={styles.buttonsContainer}
      />
    </View>
  );
}
