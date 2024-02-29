import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const Cart = () => {
    const cart = useSelector(state => state.cart);

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CartItem item={item} />}
            />
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
        backgroundColor: 'black',
    },
    listContainer: {
        flex: 1,
    },
    confirmContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 120,
        paddingHorizontal: 20,
        backgroundColor: colors.yellowPage,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
    },
    confirmButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
    },
    confirmButtonText: {
        fontFamily: fonts.PlayfairDisplaySCRegular,
        fontSize: 18,
        color: 'white',
    },
    totalText: {
        fontFamily: fonts.PlayfairDisplaySCRegular,
        fontSize: 24,
        color: 'black',
    },
});

export default Cart;
