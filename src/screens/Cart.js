import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CartItem from '../components/CartItem';
import cart from '../utils/data/cart.json';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={cart.items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      </View>
      <View style={styles.confirmContainer}>
        <Text style={styles.totalText}>Total: $ {cart.total}</Text>
        <Pressable style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black'
  },
  listContainer: {
    flex: 1,
  },
  confirmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    marginBottom: 120,
    borderWidth: 2,
    borderColor: colors.yellowPage,
  },
  confirmButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.yellowPage,
  },
  confirmButtonText: {
    fontFamily: fonts.PlayfairDisplaySCRegular,
    fontSize: 18,
    color: 'white',

  },
  totalText: {
    fontFamily: fonts.PlayfairDisplaySCRegular,
    fontSize: 24,
    color: colors.yellowPage,
  },
});

export default Cart;
