
import React from 'react'
import Carousel from '../../components/Carousel';
import Ticket from '../../components/Ticket';

interface Ticket {
    name: string
    qr: string
}

interface Image {
    uri: string
}

const tickets: Ticket[] = [{
    name: "국밥",
    qr: "hello",
}]

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
            keyExtractor={item => item.name}
        />
    )
}

export default TicketPage;