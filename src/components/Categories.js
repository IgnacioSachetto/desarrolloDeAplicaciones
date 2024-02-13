import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import categories from '../utils/data/categories.json';
import CardCategory from './CardCategory';

const Categories = ({ selectedCategoryState }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CardCategory item={item} selectedCategoryState={selectedCategoryState} />
      )}
      contentContainerStyle={styles.container}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
});
