import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import Header from './src/components/Header'
import Home from './src/screens/Home'
import ProductDetail from './src/screens/ProductDetail'
import ProductByCategory from './src/screens/ProductsByCategory'
import colors from './src/utils/globals/colors'
import { fontCollection } from './src/utils/globals/fonts'
const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  const { width, height } = useWindowDimensions()
  const [portrait, setPortrait] = useState(true)

  useEffect(() => {
    if (width > height) setPortrait(false)
    else setPortrait(true)
  }, [width, height])

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.yellowPage} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={({ route, navigation }) => ({
            header: () => <Header title={route.name === "Home" ? "Categories" : route.name === "ProductByCategory" ? route.params.categorySelected : "Product Details"} />,
          })}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductByCategory" component={ProductByCategory} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )

}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


