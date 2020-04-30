import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ openTodo, todo, removeTodo, editTitleTodo }) => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        todo={todo}
        editTitleTodo={editTitleTodo}
      />

      <AppCard>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Ред." onPress={() => setModal(true)}></Button>
      </AppCard>

      <Button
        color="grey"
        title="Назад"
        onPress={() => {
          openTodo(null);
        }}
      />
      <Button
        color="red"
        title="Удалить"
        onPress={() => {
          removeTodo(todo.id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { textAlign: "center", fontSize: 24 },
});
