import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default AddTodo = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const onPressHandler = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue("");
    } else {
      Alert.alert("Название дела не может быть пустым");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        style={styles.input}
        onChangeText={setInputValue}
        placeholder="Ввведите название дела"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={onPressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor: "#3949ab",
  },
});
