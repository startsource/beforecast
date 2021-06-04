import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the weather info...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#ecf0f1",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 30,
  },
});
