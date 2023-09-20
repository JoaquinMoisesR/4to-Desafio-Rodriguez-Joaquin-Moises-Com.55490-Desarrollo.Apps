import { View, Text, Image, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import styles from './Details.style'

const Details = ({route}) => {
  const {product} = route.params
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header title={'Detalles'} /> 
      <Image style={styles.image} source={{ uri: product.images[0] }}/>
      <View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`US$ ${product.price}`}</Text>
      </View>
    
    </View>
  )
}

export default Details