import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  useColorScheme,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Collection() {
  const [operations, setOperations] = useState([]);
  const [filteredOperations, setFilteredOperations] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetch("https://ballaual.de/wp-content/uploads/operation.json")
        .then((response) => response.json())
        .then((data) => {
          setOperations(data.operation);
          setFilteredOperations(data.operation);
        })
        .catch((error) => console.error(error));
    }
  }, [isFocused]);

  const sortedOperations = filteredOperations.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const sections = [];
  sortedOperations.forEach((operation) => {
    if (!sections.some((section) => section.title === operation.title[0])) {
      sections.push({
        title: operation.title[0],
        data: [operation],
      });
    } else {
      const index = sections.findIndex(
        (section) => section.title === operation.title[0]
      );
      sections[index].data.push(operation);
    }
  });

  const handleFilter = (text) => {
    const filtered = operations.filter(
      (operation) =>
        operation.title.toLowerCase().includes(text.toLowerCase()) ||
        operation.description.toLowerCase().includes(text.toLowerCase())
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

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <TextInput
        style={[styles.searchContainer, themeTextStyle, themeTextInputStyle]}
        placeholder="Sammlung durchsuchen ..."
        onChangeText={(text) => handleFilter(text)}
      />
      <FlatList
        data={sections}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <View>
            <Text style={[styles.sectionHeader, themeTextStyle]}>
              {item.title}
            </Text>
            {item.data.map((operation) => (
              <View key={operation.id} style={styles.operationContainer}>
                <Text style={[styles.operationTitle, themeTextStyle]}>
                  {operation.title}
                </Text>
                <Text style={[styles.operationDescription, themeTextStyle]}>
                  {operation.description}
                </Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  operationContainer: {
    marginBottom: 16,
  },
  operationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  operationDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CFCFCF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  lightContainer: {
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    backgroundColor: "#1D2935",
  },
  lightThemeText: {
    color: "#000000",
  },
  darkThemeText: {
    color: "#FFFFFF",
  },
  darkThemeTextInput: {
    color: "#000000",
  },
});
