import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TextInput, useColorScheme, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../../styles/screens/expertiseStyles";
import { lightStyles, darkStyles } from "../../styles/appStyles";

export default function Favorites({ navigation }) {
  const colorScheme = useColorScheme?.() || "light";
  const appStyles = colorScheme === "light" ? lightStyles : darkStyles;

  const [favorites, setFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [searchText, setSearchText] = useState("");
  const isFocused = useIsFocused();

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      return favorites != null
        ? JSON.parse(favorites).sort((a, b) => a.titel.localeCompare(b.titel))
        : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const sortedOperations = filteredFavorites.sort((a, b) =>
    a.titel.localeCompare(b.titel)
  );
  const sections = [];
  sortedOperations.forEach((operation) => {
    if (!sections.some((section) => section.titel === operation.titel[0])) {
      sections.push({
        titel: operation.titel[0],
        data: [operation],
      });
    } else {
      const index = sections.findIndex(
        (section) => section.titel === operation.titel[0]
      );
      sections[index].data.push(operation);
    }
  });

  useEffect(() => {
    if (isFocused) {
      setSearchText("");
      getFavorites().then((favorites) => {
        setFavorites(favorites);
        setFilteredFavorites(favorites);
      });
    }
  }, [isFocused]);

  const handleFilter = (text) => {
    setSearchText(text);
    const filtered = favorites.filter(
      (favorite) =>
        favorite.titel.toLowerCase().includes(text.toLowerCase()) ||
        favorite.beschreibung.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFavorites(filtered);
  };

  const handleFavoritePress = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
    setFilteredFavorites(newFavorites);
    AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleOperationPress = (operation) => {
    navigation.navigate("Details", { operation });
  };

  return (
    <View style={[styles.container, appStyles.background]}>
      {favorites.length === 0 ? (
        <Text style={[styles.noResults, appStyles.text]}>
          Sie haben noch keine Favoriten hinzugefügt.
        </Text>
      ) : (
        <>
          <TextInput
            style={[
              styles.searchContainer,
              appStyles.textinput,
            ]}
            placeholder="Favoriten durchsuchen ..."
            onChangeText={(text) => handleFilter(text)}
            value={searchText}
            onFocus={() => setSearchText("")}
          />
          <FlatList
            data={sections}
            keyExtractor={(item, index) => `${item.titel}-${index}`}
            renderItem={({ item, index }) => (
              <View>
                {index > 0 && <View style={styles.sectionDivider}></View>}
                <Text style={[styles.sectionHeader, appStyles.text]}>
                  {item.titel}
                </Text>
                {item.data.map((operation) => (
                  <TouchableOpacity
                    key={operation.id}
                    style={styles.operationContainer}
                    onPress={() => handleOperationPress(operation)}
                  >
                    <Text style={[styles.operationTitle, appStyles.text]}>
                      {operation.titel}
                    </Text>
                    <Text style={[styles.operationDescription, appStyles.text]}>
                      {operation.beschreibung}
                    </Text>
                    <View style={styles.favoriteIcon}>
                      <Ionicons
                        name="heart"
                        size={24}
                        color="red"
                        onPress={() => handleFavoritePress(operation.id)}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />
        </>
      )}
    </View>
  );
}
