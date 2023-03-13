import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
} from "react-native";

export default function Info() {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeTextInputStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeTextInput;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View>
        <Text style={[styles.comingSoon, themeTextStyle]}>coming soon</Text>
      </View>
      <StatusBar
        backgroundColor={colorScheme === "dark" ? "#1D2935" : "#FFFFFF"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 100,
  },
  comingSoon: {
    fontSize: 30,
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
});
