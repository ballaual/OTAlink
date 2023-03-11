import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function New() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
