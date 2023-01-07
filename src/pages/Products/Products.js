import React from 'react'
import { FlatList } from 'react-native'
import Config from 'react-native-config'
import ProductCard from '../../components/Cards/ProductCard'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import styles from './Products.style'

const Products = ({navigation}) => {
    const { data, loading, error } = useFetch(Config.GET_PRODUCTS)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    const handleProductSelect = (id) => {
        navigation.navigate('Detail',{id})
    }

    const renderProducts = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />

    return (
        <FlatList style={styles.container} data={data} renderItem={renderProducts} />
    )
}

export default Products;