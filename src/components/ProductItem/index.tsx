import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export type ProductItemProps = {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        rating: number,
        oldPrice?: number,
        price: number
    }
}

const ProductItem = (props: ProductItemProps) => {
    const { item } = props;
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate("ProductDetailsScreen", { id: item.id })
    }
    return (
        <Pressable onPress={onPress} style={styles.productContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    {new Array(5).fill(0).map((el, i) => {
                        const iconName = i < Math.floor(item.avgRating) ? 'star' : item.avgRating - i > 0 ? 'star-half-empty' : 'star-o'
                        return (<Icon key={`${item.id}--${i}`} style={styles.star}
                            name={iconName}
                            size={20}
                            color="#e47911" />
                        )
                    })

                    }

                    <Text>{item.rating}</Text>
                </View>
                <Text style={styles.price}>from ${item.price} {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice} </Text>}</Text>
            </View>
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: "row",
        borderColor: "#d1d1d1",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5



    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: "contain",


    },
    title: {
        fontSize: 18
    },
    rightContainer: {
        flex: 3,

        padding: 10,

    },
    star: {
        margin: 2

    },
    ratingContainer: {
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center"

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
