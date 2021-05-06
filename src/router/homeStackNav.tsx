import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import BottomTabNav from "./bottomTabNav"
import ProductScreen from '../screens/ProductScreen'
import HomeScreen from '../screens/HomeScreen'
import Feather from "react-native-vector-icons/Feather"


const Stack = createStackNavigator();

interface HeaderComponentProps {
    searchValue: string,
    setSearchValue: () => {}
}

const HeaderComponent = (props: HeaderComponentProps) => {
    const { searchValue, setSearchValue } = props;


    return (
        <SafeAreaView style={{ backgroundColor: "#22e3dd" }}>
            <View style={{ backgroundColor: "white", margin: 10, padding: 5, flexDirection: "row", alignItems: "center" }}>
                <Feather name="search" size={20} />
                <TextInput value={searchValue} onChangeText={setSearchValue} placeholder="Search..." style={{ height: 40, marginLeft: 10, fontSize: 18 }} />
            </View>
        </SafeAreaView>
    )
}

const HomeStackNav = () => {
    const [searchValue, setSearchValue] = React.useState('')
    return (
        <Stack.Navigator screenOptions={{ header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} /> }} >
            <Stack.Screen name="HomeScreen" options={{ title: "Home" }} >
                {() => <HomeScreen searchValue={searchValue} />}
            </Stack.Screen>
            <Stack.Screen name="ProductDetailsScreen" component={ProductScreen} options={{ title: "Product Details" }} />
        </Stack.Navigator>

    )
}

export default HomeStackNav
