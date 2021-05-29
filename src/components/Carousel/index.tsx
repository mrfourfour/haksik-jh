import React from 'react'
import { ListRenderItem, StyleSheet, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import Card from '../Card';

interface CarouselProps<T> {
    items: T[]
    renderItem: ListRenderItem<T>
    keyExtractor: (item: T, index: number) => string
    gap: number
    offset: number
    itemWidth: number
}

interface Style {
    container: ViewStyle 
}

const styles = StyleSheet.create<Style>({
    container: {
    }
})

function Carousel<T>({items, renderItem, keyExtractor, gap, offset, itemWidth}: CarouselProps<T>) {
    return (
        <FlatList 
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={{...styles.container, paddingHorizontal: offset + gap / 2, paddingVertical: 24}}
            data={items}
            decelerationRate="fast"
            renderItem={(props) => <Card style={{width: itemWidth, marginHorizontal: gap / 2}}>{renderItem(props)}</Card>}
            horizontal
            pagingEnabled
            snapToInterval={itemWidth + gap}
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
        />
    )
}

export default Carousel;