import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import MainNavigator from './src/navigation/MainNavigator'
import colors from './src/utils/globals/colors'
import { fontCollection } from './src/utils/globals/fonts'

const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.yellowPage} />
      <MainNavigator/>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


