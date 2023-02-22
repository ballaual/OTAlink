import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#ffff" }}>Favoriten</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D2935",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
