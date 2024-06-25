import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
});

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

export default Row;
