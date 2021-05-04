import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ButtonProps {
    text: string,
    onPress: () => void,
    containerStyle: {}
}

const Button = ({ text, onPress, containerStyle }: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffa41d",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#a15e1b"
    },
    text: {
        fontSize: 16,

    }
})
