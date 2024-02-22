import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import products from '../utils/data/products.json';
import colors from '../utils/globals/colors';

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFound = products.find(product => product.id === productId);
    setProduct(productFound);
  }, [productId]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <Pressable style={styles.buyNow}>
          <Text style={styles.buyNowText}>Comprar Ahora</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  containerText: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  containerPrice: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  price: {
    fontSize: 30,
  },
  buyNow: {
    backgroundColor: colors.green1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buyNowText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
