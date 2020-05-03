import React from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {todos && todos.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} openTodo={openTodo} />
          )}
        />
      ) : (
        <Text style={{ textAlign: "center" }}>
          Вы пока не добавили никаких дел!
        </Text>
      )} 
    </View>
  );
};

const styles = StyleSheet.create({});
