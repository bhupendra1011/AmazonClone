import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface QuantityProps {
    quantity: number,
    setQuantity: (val: number) => void
}

const QuantitySelector = ({ quantity, setQuantity }: QuantityProps) => {


    const onMinus = () => {

        setQuantity(Math.max(0, quantity - 1))
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}> - </Text>
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable onPress={onPlus} style={styles.button} >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>

        </View>
    )
}

export default QuantitySelector

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "space-between",
        width: 130
    },
    button: {

        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cccccc"

    },
    buttonText: {
        fontSize: 20
    },
    quantity: {
        color: "#007eb9",
        fontSize: 18
    }
})
