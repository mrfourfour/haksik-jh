import React from 'react'
import { View, Text, StyleSheet, ViewStyle, Image, ImageStyle } from 'react-native'
import Card from '../Card';

interface TicketProps {
    name: string
    qr: string
}

interface Styles {
    image: ImageStyle
}
const styles = StyleSheet.create<Styles>({
    image: {
        flex: 1,
        resizeMode: 'center' 
    } 
})

const Ticket = ({name, qr}: TicketProps) => (
    <Card>
        <Text>{name}</Text>
    </Card>
)

export default Ticket;