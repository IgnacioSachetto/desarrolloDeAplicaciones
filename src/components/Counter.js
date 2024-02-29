import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlide';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const Counter = ({ initialValue, textButton, product }) => {
    const [count, setCount] = useState(initialValue);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAddCartItem = () => {
        dispatch(addCartItem({ ...product, quantity: count }));
        setCount(initialValue);
    };

    return (
        <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton} onPress={handleAddCartItem}>
                <Text style={styles.addButtonText}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    counterContainer: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10,
        margin:5,
    },
    addButton: {
        backgroundColor: colors.yellowPage,
        borderRadius: 20,
        padding: 10,
        margin:2,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: fonts.JosefinSansBold,
        color: colors.yellowPage,
        margin:2,
    },
    addButtonText: {
        fontSize: 18,
        fontFamily: fonts.JosefinSansBold,
        color: 'black',
    },
    text: {
        width: 50,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: fonts.JosefinSansBold,
        color: 'black',
    },
});
