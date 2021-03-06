import React from 'react'
import { View, Text, StyleSheet, ViewStyle, Image, ImageStyle } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import Card from '../Card';

interface TicketProps {
    name: string
    qr: string
}

interface Styles {
    image: ImageStyle,
    card: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    image: {
        flex: 1,
        resizeMode: 'center' 
    },
    card: {

    }
})

const Ticket = ({name, qr}: TicketProps) => (
    <Card style={styles.card}>
        <QRCode value={qr} />
        <Text>{name}</Text>
    </Card>
)

export default Ticket;