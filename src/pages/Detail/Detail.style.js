import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image : {
    width : deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor : 'white'
  },
  body_container : {
    margin : 10,
    padding : 10,
  },
  title : {
    fontSize : 30,
    fontWeight: 'bold',
    color: '#000',
  },
  description : {
    fontSize : 18,
    color: 'black',
  },
  price : {
    fontSize : 18,
    color: 'red',
    textAlign : 'center',
  }
})