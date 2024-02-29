import { Feather } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const OrderItem = ({ order }) => {

  return (
    <View style={styles.card}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {new Date(order.createdAt).toLocaleString()}
            </Text>
            <Text style={styles.text2}>$ {order.total}</Text>
        </View>
        <Feather name="search" size={30} color={colors.yellowPage} />
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'black',
        borderWidth: 2,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: colors.black,
    },
    textContainer:{
        width: "70%",
    },
    text:{
        fontSize: 16,
        fontFamily: fonts.JosefinSansBold,
        color: 'white',
    },
    text2:{
        fontSize: 18,
        fontFamily: fonts.JosefinSansBold,
        color: colors.yellowPage,
    },
});
