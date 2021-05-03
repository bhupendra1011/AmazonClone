import React from 'react'
import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

interface ImageCarouselProps {
    images: [string]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const windowWidth = useWindowDimensions().width;

    const onViewRef = React.useRef((viewableItems) => {
        const newIndex = viewableItems.changed[0].index;
        setActiveIndex(newIndex);
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    return (
        <View style={styles.container}>
            <FlatList data={images} horizontal renderItem={({ item }) => (<Image style={[styles.image, { width: windowWidth - 40 }]} source={{ uri: item }} />)}
                keyExtractor={(item) => item.match(/([^\/]+$)/)[0]}
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dotContainer}>
                {images.map((image, index) => <View
                    key={index}
                    style={
                        [styles.dot, { backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed' }]
                    }
                />)}
            </View>

        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    container: {

    },
    image: {
        height: 250,
        resizeMode: "contain",
        margin: 10
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#c9c9c9",
        backgroundColor: "#ededed",
        margin: 5

    }
})
