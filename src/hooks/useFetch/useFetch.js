import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    return { data, loading, error }
}

export default useFetch;