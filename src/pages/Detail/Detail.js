import React from 'react'
import { View, Image, Text } from 'react-native'
import useFetch from '../../hooks/useFetch'
import styles from './Detail.style'
import Config from 'react-native-config'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Detail = ({ route }) => {
    const { id } = route.params

    const { data, loading, error } = useFetch(`${Config.GET_PRODUCTS}/${id}`)

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error/>
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} ₺</Text>
            </View>
        </View>
    )
}

export default Detail;