import React from "react";
import { StyleSheet, View, StatusBar, useColorScheme } from "react-native";
import { WebView } from "react-native-webview";

export default function New() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://docs.google.com/forms/d/e/1FAIpQLSf5ha2BC2XLON8shFAegeDQV5cvxkVEWJdj-DCGy2xK4oNjYw/viewform?usp=sf_link",
        }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        cacheEnabled={false}
      />
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
  },
});
