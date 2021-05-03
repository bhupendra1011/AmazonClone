import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import product from '../../data/product'

import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = React.useState(product.options ? product.options[0] : '');
    const [quantity, setQuantity] = React.useState(1)
    return (
        <View style={styles.container}>
            <Text >{product.title}</Text>
            { product.options && (
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedOption(itemValue)
                    }>

                    {
                        product.options.map(item => <Picker.Item key={item} label={item} value={item} />)
                    }
                </Picker>
            )}

            <Text style={styles.price}>from ${product.price} {product.oldPrice && <Text style={styles.oldPrice}>{product.oldPrice} </Text>}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text="Add to Cart" onPress={() => { console.warn("Add to cart") }} />
            <Button text="Buy Now" onPress={() => { console.warn("buy now") }} />

        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "white"
    },

    description: {
        marginVertical: 10,
        lineHeight: 20

    },
    price: {
        fontSize: 18,
        fontWeight: "bold"
    },
    oldPrice: {
        fontSize: 14,
        fontWeight: "normal",
        textDecorationLine: "line-through"
    }

})
