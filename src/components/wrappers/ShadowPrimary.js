import React from 'react';
import { StyleSheet, View } from 'react-native';

const ShadowPrimary = ({ style, children }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default ShadowPrimary;

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
