import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddressScreen from '../screens/AddressScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeStackNav from './homeStackNav'
import CartStackNav from './cartStackNav'
import MenuScreen from '../screens/MenuScreen'

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, inactiveTintColor: "#ffbd7d", activeTintColor: "#e47911" }}>
            <Tab.Screen name="home" component={HomeStackNav}
                options={{ tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} /> }}

            />
            <Tab.Screen name="profile" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => <Entypo name="user" color={color} size={size} /> }} />
            <Tab.Screen name="shoppingCart" component={CartStackNav} options={{ tabBarIcon: ({ color, size }) => <Entypo name="shopping-cart" color={color} size={size} /> }} />
            <Tab.Screen name="more" component={MenuScreen} options={{ tabBarIcon: ({ color, size }) => <Entypo name="menu" color={color} size={size} /> }} />
        </Tab.Navigator>
    )
}

export default BottomTabNav
