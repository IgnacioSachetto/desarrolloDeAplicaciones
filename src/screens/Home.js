import { StyleSheet } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'


const Home = ({selectedCategoryState}) => {
    
  return (
    <>
        <Header title="Home"/>
        <Categories selectedCategoryState={selectedCategoryState}/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})