import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { lightStyles, darkStyles } from "../../styles/appStyles";

export default function Info() {
  const appStyles = useColorScheme() === "light" ? lightStyles : darkStyles;

  return (
    <View style={[styles.container, appStyles.background]}>
      <View>
        <Text style={[styles.comingSoon, appStyles.text]}>coming soon</Text>
      </View>
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
