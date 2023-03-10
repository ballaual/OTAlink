import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  appName: {
    marginTop: 40,
    fontSize: 40,
  },
  description: {
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 20,
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
  descriptionLink: {
    color: "#007AFF",
    textDecorationLine: "underline",
    fontSize: 20,
  },
});

export default styles;
