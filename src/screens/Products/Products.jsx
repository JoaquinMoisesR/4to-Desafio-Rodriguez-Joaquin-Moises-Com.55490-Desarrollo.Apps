import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../../data/products'
import styles from './Products.style'
import { Header, SearchInput } from '../../components'
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/colors'

const Products = ({navigation, route}) => {

    const [arrProducts, setArrProducts] = useState([])
    const [keyword, setKeyword] = useState ('')

    const {category} = route.params

    useEffect(() =>{
        if (category) { 
        const products = allProducts.filter(
            product => product.category === category
        )
        const productsFiltered = products.filter(
            product => product.title.includes(keyword)
        )
        setArrProducts(productsFiltered)
        } else {
            const productsFiltered = allProducts.filter(
                product => product.title.includes(keyword)
            )
        setArrProducts(productsFiltered)        
        } 
    }, [category, keyword])


  return (
    <View style={styles.container}>
        <Header title={category}/>
        <SearchInput onSearch={setKeyword} />
        <View style={styles.listContainer}>
            <FlatList 
            data={arrProducts}
            renderItem={({item}) => (
            <TouchableOpacity  onPress={()=> navigation.navigate('Details', {product: item})} >
                
                <Text style={styles.titulo}>"{item.title}"   <FontAwesome name="folder-open" size={24} color={colors.tertiary} /> </Text>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            />
        </View>
    </View>
  )
}

export default Products