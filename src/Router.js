import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from './pages/Products'
import Detail from './pages/Detail'

const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Products"
        component={Products} 
        options={{
          title : 'Ürünler',
          headerTitleAlign : 'center',
          headerStyle : {
            backgroundColor : '#29B6F6',
          },
          headerTitleStyle : {
            color : '#fff',
          }
        }}       
        />
        <Stack.Screen 
        name="Detail" 
        component={Detail} 
        options={{
          title : 'Ürün Detay',
          headerTitleAlign : 'center',
          headerStyle : {
            backgroundColor : '#29B6F6',
          },
          headerTitleStyle : {
            color : '#fff',
          },
          headerTintColor : '#fff',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;