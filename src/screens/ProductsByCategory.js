import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductByCategory from '../components/ProductByCategory';
import Search from '../components/Search';
import products from '../utils/data/products.json';

const ProductsByCategory = ({ categorySelected, selectedProductId }) => {
  const navigation = useNavigation();

  const [productsFiltered, setProductsFiltered] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handlerKeyword = (k) => {
    setKeyword(k);
  };

  useEffect(() => {
    if (categorySelected) setProductsFiltered(products.filter(product => product.category === categorySelected));
    if (keyword) setProductsFiltered(productsFiltered.filter(product => {
      const productTitleLower = product.title.toLowerCase();
      const keywordLower = keyword.toLowerCase();
      return productTitleLower.includes(keywordLower);
    }));
  }, [categorySelected, keyword]);

  return (
    <>
      <Header title={categorySelected} />
      <Search handlerKeyword={handlerKeyword} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductByCategory selectedProductId={selectedProductId} item={item} />}
      />
    </>
  );
};

export default ProductsByCategory;

const styles = StyleSheet.create({});
