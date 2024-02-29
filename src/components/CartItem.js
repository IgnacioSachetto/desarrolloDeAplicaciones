import { Entypo } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../utils/globals/colors'
import fonts from '../utils/globals/fonts'

const CartItem = ({item}) => {
  return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>{item.price}</Text>
            </View>
            <Entypo name="trash" size={30} color="black"/>
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor:'black',
        padding:20,
        margin:10,
        borderWidth:2,
        borderColor: colors.yellowPage,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:colors.yellowPage,
        fontSize:19,
        fontFamily:fonts.JosefinSansBold
    },
    text2:{
        color:'white',
        fontSize:14,
        fontFamily:fonts.JosefinSansBold
    }
})