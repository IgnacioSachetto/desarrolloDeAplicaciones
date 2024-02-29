import { useFonts } from "expo-font"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import MainNavigator from './src/navigation/MainNavigator'
import colors from './src/utils/globals/colors'
import { fontCollection } from './src/utils/globals/fonts'

const App = () => {

  const [fontsLoaded] = useFonts(fontCollection)

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.yellowHeader} />
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>

  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


