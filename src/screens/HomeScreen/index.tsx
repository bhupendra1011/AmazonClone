import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from "../../data/products"

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/* Product Component */}
            <ProductItem item={products[0]} />

        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10
    }

})

export default HomeScreen;
