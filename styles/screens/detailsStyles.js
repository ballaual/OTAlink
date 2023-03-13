import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 24,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
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
  detailsContainer: {
    marginTop: 16,
  },
  separator: {
    height: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteContainer: {
    marginLeft: 10,
  },
});

export default styles;
