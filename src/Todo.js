import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default Todo = ({ todo, removeTodo }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => {
        removeTodo(todo.id);
      }}
    >
      <View style={styles.container}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginTop: 10,
  },
});
