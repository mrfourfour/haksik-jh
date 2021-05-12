import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

interface Style {
    container: ViewStyle
}

const cardStyles = StyleSheet.create<Style>({
    container: {
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    }
}) 

interface CardProp {
    children: ReactNode
}
const Card = ({children}: CardProp) => (
    <View style={cardStyles.container}>
        {children}
    </View>
)

export default Card;