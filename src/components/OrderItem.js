import { Feather } from "@expo/vector-icons";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../utils/globals/colors';
import fonts from '../utils/globals/fonts';

const OrderItem = ({ order }) => {
  const firstItem = order.items[0];

  return (
    <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={{ uri: firstItem.thumbnail }}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{firstItem.title}</Text>
            <Text style={styles.text}>
                {new Date(order.createdAt).toLocaleString()}
            </Text>
            <Text style={styles.text2}>$ {order.total}</Text>
        </View>
        <Feather name="search" size={24} color={colors.yellowPage} />
    </View>
  );
};

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
        borderColor: colors.yellowPage,
    },
    textContainer:{
        width: "50%",
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.JosefinSansBold,
        color: 'white',
        marginBottom: 5,
    },
    text:{
        fontSize: 14,
        fontFamily: fonts.JosefinSansBold,
        color: 'white',
        marginBottom: 5,
    },
    text2:{
        fontSize: 16,
        fontFamily: fonts.JosefinSansBold,
        color: colors.yellowPage,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
});

export default OrderItem;
