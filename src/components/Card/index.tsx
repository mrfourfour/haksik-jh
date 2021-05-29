import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

interface Style {
    container: ViewStyle
}

const cardStyles = StyleSheet.create<Style>({
    container: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 24,
        borderWidth: 0.5,
        borderColor: '#d7d7d7'
    }
}) 

interface CardProp {
    children: ReactNode
    style: ViewStyle
}
const Card = ({style, children}: CardProp) => (
    <View style={{...cardStyles.container, ...style}}>
        {children}
    </View>
)

export default Card;