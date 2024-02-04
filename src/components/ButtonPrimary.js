import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const ButtonPrimary = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? '#DDDDDD' : '#FFFFFF',
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 16,
  },
});
