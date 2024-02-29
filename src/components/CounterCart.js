import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlide';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const CounterCart = ({ item }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleUpdateCart = () => {
        const quantityToAdd = quantity - item.quantity;
        if (quantityToAdd > 0) {
            dispatch(addCartItem({ ...item, quantity: quantityToAdd }));
        }
    };

    return (
        <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{quantity}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdateCart}>
                <Text style={styles.updateButtonText}>Confirm Items</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CounterCart;

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 5,
        marginRight: 5,
    },
    buttonText: {
        fontSize: 20,
        fontFamily: fonts.JosefinSansBold,
        color: colors.yellowPage,
    },
    text: {
        width: 50,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: fonts.JosefinSansBold,
        color: 'black',
        marginHorizontal: 5,
    },
    updateButton: {
        backgroundColor: colors.green1,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    updateButtonText: {
        fontSize: 16,
        fontFamily: fonts.JosefinSansBold,
        color: 'black',
    },
});
