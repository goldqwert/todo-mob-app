import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export const TodoScreen = ({ openTodo, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button
        title="Назад"
        onPress={() => {
          openTodo(null);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
