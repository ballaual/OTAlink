import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  useColorScheme,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import styles from "../../styles/screens/detailsStyles";

export default function Details({ route }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const operation = route.params?.operation;
  const [favorites, setFavorites] = useState([]);
  const isFocused = useIsFocused();

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
    <ScrollView style={[styles.container, themeContainerStyle]}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, themeTextStyle]}>{operation.titel}</Text>
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
          {operation.abdeckunglagerung}
        </Text>
        <View style={styles.separator} />
        <Text style={[styles.detailsTitle, themeTextStyle]}>Ablauf:</Text>
        <Text style={[styles.detailsText, themeTextStyle]}>
          {operation.opablauf}
        </Text>
        <View style={styles.separator} />
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
