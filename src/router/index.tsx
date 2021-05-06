import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddressScreen from '../screens/AddressScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import { RotationGestureHandler } from 'react-native-gesture-handler'
import BottomTabNav from "./bottomTabNav"

const Root = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer >
            <Root.Navigator screenOptions={{ headerShown: false }}>
                <Root.Screen name="Home" component={BottomTabNav} />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Router
