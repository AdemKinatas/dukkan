import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        flexDirection: "row",
        backgroundColor : '#B2EBF2',
    },
    container_body: {
        flex: 1,
        padding: 5,
        justifyContent : 'space-between',
    },
    image: {
        width: 100,
        minHeight : 100,
        resizeMode: 'contain',
        backgroundColor : 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    price: {
        color: 'red',
        textAlign : 'right',
        fontSize : 16,
        fontStyle : 'italic',
    }
})