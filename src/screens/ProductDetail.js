import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Header from '../components/Header';
import products from '../utils/data/products.json';
import colors from '../utils/globals/colors';

const ProductDetail = ({ productId, portrait }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFound = products.find(product => product.id === productId);
    setProduct(productFound);
  }, [productId]);



  return (
    <View style={styles.container}>
      <Header title="Detalle del producto" />
      <View style={[styles.content, !portrait && styles.contentPortrait]}>
        <Image
          style={[styles.image, { width: portrait ? '100%' : width * 0.4 }]}
          source={{ uri: product?.images ? product.images[0] : null }}
          resizeMode='cover'
        />
        <View style={[styles.productDetails, !portrait && styles.productDetailsPortrait]}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.additionalInfo}>Fabricante: {product.manufacturer}</Text>
          <Text style={styles.additionalInfo}>Disponibilidad: {product.availability}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Pressable style={styles.buyNow}>
            <Text style={styles.buyNowText}>Comprar ahora</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  contentPortrait: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    height: 300,
    marginBottom: 20,
  },
  productDetails: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 100,
  },
  productDetailsPortrait: {
    width: '60%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 15,
  },
  additionalInfo: {
    marginBottom: 5,
    fontStyle: 'italic',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buyNow: {
    backgroundColor: colors.green1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  buyNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
