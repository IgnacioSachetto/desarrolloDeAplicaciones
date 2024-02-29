import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem, deleteCartItem } from '../features/cart/cartSlide';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';
import CounterCart from './CounterCart';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({ ...item, quantity }));
    };

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>Precio: ${item.price}</Text>
                <CounterCart item={item} />
            </View>
            <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color="black" />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.yellowPage,
        padding: 20,
        margin: 5,
        borderWidth: 2,
        borderColor: colors.yellowPage,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    text: {
        color: 'black',
        fontSize: 19,
        fontFamily: fonts.JosefinSansBold,
    },
    text2: {
        color: 'black',
        fontSize: 14,
        fontFamily: fonts.JosefinSansBold,
    },
});
