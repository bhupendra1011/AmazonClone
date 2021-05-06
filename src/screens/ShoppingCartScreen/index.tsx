import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import ProductItem from '../../components/ProductItem';

import products from "../../data/cart"
import ProductScreen from '../ProductScreen';

const ShoppingCartScreen = () => {

    const navigation = useNavigation();

    const onCheckout = () => {
        navigation.navigate("AddressScreen")
    }

    const totalPrice = products.reduce((sum, product) => sum + product.quantity * product.item.price, 0)
    return (
        <View style={styles.page}>

            <FlatList data={products} renderItem={({ item }) => <CartProductItem cartItem={item} />
            }
                keyExtractor={(item) => item.id} showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (<View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>SubTotal ({products.length}):  <Text style={{ color: "#e47911" }}>${totalPrice.toFixed(2)}</Text> </Text>
                    <Button text="Proceed to Checkout" onPress={onCheckout} containerStyle={{ backgroundColor: "#f7e300", borderColor: "#c7b702" }} />
                </View>

                )}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10
    }

})

export default ShoppingCartScreen;
