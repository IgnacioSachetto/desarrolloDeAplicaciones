import { Entypo } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const TabBarIcon = ({title,nameIcon,focused}) => {
  return (
    <View style={styles.container}>
      <Entypo name={nameIcon} size={25} color={focused ? 'grey':'black'}/>
      <Text style={[styles.text,!focused && styles.textFocused]} >{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({

    container:{
        alignItems: 'center'
    },
    text:{
        color:'black',
        textAlign:"center",
        fontSize:15
    },
    textFocused:{
        color: 'black'
    }

})