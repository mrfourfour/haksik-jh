
import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from '../../components/Carousel';
import Ticket from '../../components/Ticket';

const screenWidth = Math.round(Dimensions.get('window').width)
const gap = 16
const offset = 36
const itemWidth = screenWidth - (offset + gap) * 2

interface Ticket {
    name: string
    qr: string
}

interface Image {
    uri: string
}

const tickets: Ticket[] = [
    {
        name: "국밥",
        qr: "hello",
    },
    {
        name: "국밥",
        qr: "hello",
    },
    {
        name: "국밥",
        qr: "hello",
    },
    {
        name: "국밥",
        qr: "hello",
    },
]

interface TicketRenderItemType {
    item: Ticket,
    index: number 
}

const renderItem = ({item, index}: TicketRenderItemType) => <Ticket key={index.toString()} {...item} />

function TicketPage() {
    return (
        <Carousel<Ticket>
            items={tickets}
            renderItem={renderItem}
            keyExtractor={(item, index) => index + item.name}
            gap={gap}
            offset={offset}
            itemWidth ={itemWidth}
        />
    )
}

export default TicketPage;