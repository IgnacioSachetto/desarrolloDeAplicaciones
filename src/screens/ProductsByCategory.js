import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ProductByCategory from '../components/ProductByCategory'
import Search from '../components/Search'
import products from '../utils/data/products.json'

const ProductsByCategory = ({ navigation, route }) => {
  const { categorySelected } = route.params
  const [productsFiltered, setProductsFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    let filteredProducts = products
    if (categorySelected) {
      filteredProducts = filteredProducts.filter(product => product.category === categorySelected)
    }
    if (keyword) {
      const keywordLower = keyword.toLowerCase()
      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(keywordLower))
    }
    setProductsFiltered(filteredProducts)
  }, [categorySelected, keyword])

  return (
    <View style={styles.container}>
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductByCategory navigation={navigation} item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ProductsByCategory;
