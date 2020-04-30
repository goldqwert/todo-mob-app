import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

export const AppCard = (props) => {
  return (
    <View style={styles.default}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    borderWidth: 2,
    borderColor: "grey",
    shadowColor: "grey",
    shadowRadius: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: "white",
    elevation: 8,
  },
});
