import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Navbar = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      height: 70,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#3949ab',
      paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});
