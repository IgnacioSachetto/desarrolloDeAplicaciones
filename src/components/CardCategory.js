import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';
import ShadowPrimary from './wrappers/ShadowPrimary';

const CardCategory = ({ item , navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ProductByCategory", {categorySelected:item})}>

      <ShadowPrimary style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </ShadowPrimary>
    </Pressable>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: colors.yellowPage,
    marginHorizontal: '10%',
    marginVertical: 10,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.Lora,
    color: colors.black,

  }
})
