import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Modal,
} from "react-native";

export const EditModal = ({ visible, onCancel, todo, editTitleTodo }) => {
  const [value, setValue] = useState(todo.title);
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.block}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Введите новое название дела..."
          autoCorrect={false}
          autoCapitalize="none"
        />
        <View style={{ flexDirection: "row" }}>
          <Button
            title="Cохранить"
            onPress={() => {
              if (value.trim().length < 3) {
                Alert.alert(
                  `Ошибка`,
                  `Введённый вами тект должен быть не менее 3 символов. Сейчас у вас введено ${
                    value.trim().length
                  }`
                );
              } else {
                editTitleTodo(value, todo.id);
                onCancel();
              }
            }}
          />
          <Button title="Отмена" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
