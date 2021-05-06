import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import AddressScreen from '../screens/AddressScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator();

const CartStackNav = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="CartScreen" component={ShoppingCartScreen} options={{ title: "Your Cart" }} />
            <Stack.Screen name="AddressScreen" component={AddressScreen} options={{ title: "Your Address" }} />
        </Stack.Navigator>

    )
}

export default CartStackNav

