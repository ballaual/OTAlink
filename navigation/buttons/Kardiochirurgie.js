import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TextInput,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/screens/collectionStyles";

export default function Kardiochirurgie() {
  const [operations, setOperations] = useState([]);
  const [filteredOperations, setFilteredOperations] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) {
      fetch("https://infernalestube.de/otalink/operation.json", {
        headers: {
          "Cache-Control": "no-cache",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.operation.filter(
            (operation) => operation.fachgebiet === "Kardiochirurgie"
          );
          setOperations(filteredData);
          setFilteredOperations(filteredData);
        })
        .catch((error) => console.error(error));
    }
  }, [isFocused]);

  const sortedOperations = filteredOperations.sort((a, b) =>
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

  const handleFilter = (text) => {
    const filtered = operations.filter(
      (operation) =>
        operation.titel.toLowerCase().includes(text.toLowerCase()) ||
        operation.beschreibung.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOperations(filtered);
  };

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeTextInputStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeTextInput;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const handleOperationPress = (operation) => {
    navigation.navigate("Details", { operation });
  };

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <TextInput
        style={[styles.searchContainer, themeTextStyle, themeTextInputStyle]}
        placeholder="Sammlung durchsuchen ..."
        onChangeText={(text) => handleFilter(text)}
      />
      <FlatList
        data={sections}
        keyExtractor={(item, index) => `${item.titel}-${index}`}
        renderItem={({ item, index }) => (
          <View>
            {index > 0 && <View style={styles.sectionDivider}></View>}
            <Text style={[styles.sectionHeader, themeTextStyle]}>
              {item.titel}
            </Text>
            {item.data.map((operation) => (
              <TouchableOpacity
                key={operation.id}
                style={styles.operationContainer}
                onPress={() => handleOperationPress(operation)}
              >
                <Text style={[styles.operationTitle, themeTextStyle]}>
                  {operation.titel}
                </Text>
                <Text style={[styles.operationDescription, themeTextStyle]}>
                  {operation.beschreibung}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
}
