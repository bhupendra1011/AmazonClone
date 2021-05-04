import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
        item: {
            id: string,
            title: string,
            image: string,
            avgRating: number,
            ratings: number,
            oldPrice?: number,
            price: number
        }
    }
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
    const { quantity: quantityProp, item } = cartItem;
    const [quantity, setQuantity] = React.useState(quantityProp);

    return (
        <View>
            <View style={styles.productContainer}>
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

            </View>
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>
        </View>
    )
}

export default CartProductItem

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: "row",
        borderColor: "#d1d1d1",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5



    },
    quantityContainer: {

        marginVertical: 5,

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
