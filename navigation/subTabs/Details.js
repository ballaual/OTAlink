import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { Text, View, useColorScheme, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";

import styles from "../../styles/screens/detailsStyles";
import { lightStyles, darkStyles } from "../../styles/appStyles";

export default function Details({ route }) {
  const appStyles = useColorScheme() === "light" ? lightStyles : darkStyles;

  const operation = route.params?.operation;
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();

  if (!operation) {
    return (
      <View
        style={[
          styles.container,
          appStyles.background,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <View>
          <Text style={[styles.loadingText, appStyles.text]}>
            Bitte über die Sammlung einen Datensatz aufrufen um weitere
            Informationen angezeigt zu bekommen.
          </Text>
        </View>
      </View>
    );
  }

  const timestampDate = new Date(operation.zeitstempel);
  timestampDate.setHours(timestampDate.getHours() + 1);

  const formattedTimestamp =
    format(timestampDate, "dd.MM.yyyy - HH:mm") + " Uhr";

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      return favorites != null ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    if (isFocused) {
      getFavorites().then((favorites) => setFavorites(favorites));
    }
  }, [isFocused]);

  const handleFavoritePress = async (operation) => {
    let newFavorites = [...favorites];
    const index = favorites.findIndex(
      (favorite) => favorite.id === operation.id
    );
    if (index === -1) {
      newFavorites.push(operation);
    } else {
      newFavorites.splice(index, 1);
    }
    setFavorites(newFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <ScrollView style={[styles.container, appStyles.background]}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, appStyles.text]}>{operation.titel}</Text>
          <TouchableOpacity
            key={operation.id}
            style={styles.favoriteContainer}
            onPress={() => handleOperationPress(operation)}
          ></TouchableOpacity>
          <View style={styles.favoriteIcon}>
            <Ionicons
              name={
                favorites.some((fav) => fav.id === operation.id)
                  ? "heart"
                  : "heart-outline"
              }
              size={24}
              color={
                favorites.some((fav) => fav.id === operation.id)
                  ? "red"
                  : "gray"
              }
              onPress={() => handleFavoritePress(operation)}
            />
          </View>
        </View>
        <Text style={[styles.detailsTitle, appStyles.text]}>Beschreibung:</Text>
        <Text style={[styles.detailsText, appStyles.text]}>
          {operation.beschreibung}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, appStyles.text]}>Indikation:</Text>
        <Text style={[styles.detailsText, appStyles.text]}>
          {operation.indikation}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, appStyles.text]}>
          Komplikationen:
        </Text>
        <Text style={[styles.detailsText, appStyles.text]}>
          {operation.komplikationen}
        </Text>
        {operation.siebeinstrumente && (
          <>
            <View style={styles.separator} />
            <Text style={[styles.detailsTitle, appStyles.text]}>
              Instrumente:
            </Text>
            <Text style={[styles.detailsText, appStyles.text]}>
              {operation.siebeinstrumente}
            </Text>
          </>
        )}

        {operation.abdeckunglagerung && (
          <>
            <View style={styles.separator} />
            <Text style={[styles.detailsTitle, appStyles.text]}>
              Abdeckung / Lagerung:
            </Text>
            <Text style={[styles.detailsText, appStyles.text]}>
              {operation.abdeckunglagerung}
            </Text>
          </>
        )}
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, appStyles.text]}>Ablauf:</Text>
        <Text style={[styles.detailsText, appStyles.text]}>
          {operation.opablauf}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, appStyles.text]}>
          Letzte Änderung:
        </Text>
        <Text style={[styles.detailsText, appStyles.text]}>
          {formattedTimestamp}
        </Text>
      </View>
      <View style={styles.separator} />
    </ScrollView>
  );
}
