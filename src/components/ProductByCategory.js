import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const ProductByCategory = ({ item, selectedProductId }) => {
  return (
    <Pressable onPress={() => selectedProductId(item.id)} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{item.id} {item.title}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode="cover" />
        </View>
      </View>
    </Pressable>
  );
}

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellowPage,
    width: "80%",
    marginHorizontal: "10%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderWidth: 2,
    borderColor: 'black',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.PlayfairDisplaySCRegular,
    marginRight: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
});
