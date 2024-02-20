import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native'
import Home from './src/screens/Home'
import ProductDetail from './src/screens/ProductDetail'
import ProductsByCategory from './src/screens/ProductsByCategory'
import colors from './src/utils/globals/colors'
import { fontCollection } from './src/utils/globals/fonts'

import { NavigationContainer } from '@react-navigation/native'



const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected,setCategorySelected] = useState("")
  const [productId,setProductId] = useState(0)
  const {width,height} = useWindowDimensions()
  const [portrait,setPortrait] = useState(true)

  useEffect(()=>{
    if(width > height) setPortrait(false)
    else setPortrait(true)
  },[width,height])

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)

  }
  const selectedProductId = (id) => {
    setProductId(id)
  }

  return (
    <>
        <NavigationContainer>

      <StatusBar backgroundColor={colors.yellowPage} />
      <SafeAreaView style={styles.container}>
        {categorySelected ?
                  productId ?
                    <ProductDetail
                      productId={productId}
                      portrait={portrait}
                       />
                    :
                    <ProductsByCategory
                      selectedProductId={selectedProductId}
                      categorySelected={categorySelected}/>
                  :
                  <Home selectedCategoryState={selectedCategoryState}/>

        }
      </SafeAreaView>
      </NavigationContainer>

    </>

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})