import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import OrderItem from '../components/OrderItem';
import orders from '../utils/data/orders.json';

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
  },
});

export default Orders;
