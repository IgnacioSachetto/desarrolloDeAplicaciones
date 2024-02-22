import React from 'react'
import { Image, Pressable, StyleSheet, Text } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const ProductByCategory = ({item,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("ProductDetail",{productId:item.id})} style={styles.container}>
      <Text style={styles.text}>{item.id} {item.title}</Text>
      <Image style={styles.image} source={{uri:item.thumbnail}} resizeMode="cover"/>
    </Pressable>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
  container:{
      backgroundColor:colors.yellowPage,
      width:"80%",
      marginHorizontal:"10%",
      padding:10,
      marginVertical:10,
      borderRadius:5,
      flexDirection:"row",
      alignItems:"center",
      justifyContent: "space-between",
      borderWidth: 3,
      borderColor: 'white',
  },
  text:{
      width:"50%",
      fontSize:16,
      fontFamily:fonts.PlayfairDisplaySCRegular
  },
  image:{
      width: 90,
      height: 90,
      borderRadius:5,
  }
})