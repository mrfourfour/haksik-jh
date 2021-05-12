import React from 'react'
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'

interface CarouselProps<T> {
    items: T[]
    renderItem: ListRenderItem<T>
    keyExtractor: (item: T) => string
}

function Carousel<T>({items, renderItem, keyExtractor}: CarouselProps<T>) {
    return (
        <FlatList 
            data={items}
            renderItem={renderItem}
            horizontal={true} 
            keyExtractor={keyExtractor}
        />
    )
}

export default Carousel;