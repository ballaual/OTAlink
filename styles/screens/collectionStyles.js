import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 20,
    backgroundColor: "#1D2935",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9E9E9E",
    width: 180,
    height: 75,
  },
  buttonTitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 25,
  },
});

export default styles;
