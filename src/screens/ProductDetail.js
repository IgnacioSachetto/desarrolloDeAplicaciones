import { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Counter from '../components/Counter'
import products from '../utils/data/products.json'
import colors from '../utils/globals/colors'

const ProductDetail = ({route}) => {
  const {productId} = route.params
  const [product,setProduct] = useState({})

  useEffect(()=>{
    const productFinded = products.find(product => product.id === productId)
    setProduct(productFinded)
  },[productId])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{uri:product?.images ? product.images[0] : null}}
          resizeMode='cover'
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <View style={styles.containerButton}>
          <Counter
            initialValue={1}
            product={product}
            textButton="Add To Cart"
            buttonStyle={styles.addButton}
            buttonTextStyle={styles.addButtonText}
          />
        </View>
      </View>
    </View>
  )
}

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
  containerButton: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
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
  addButton: {
    backgroundColor: colors.yellowPage,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
