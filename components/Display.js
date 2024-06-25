import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  displayContainer: {
    padding: 20,
  },
  displayText: {
    color: "#fff",
    fontSize: 60,
    textAlign: "right",
  },
});

const Display = ({ value }) => (
  <View style={styles.displayContainer}>
    <Text style={styles.displayText}>
      {parseFloat(value).toLocaleString()}
    </Text>
  </View>
);

export default Display;
