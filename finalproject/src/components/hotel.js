import React from 'react'

import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function Hotel() {
    return(
        <>
        <Container>
            <Row>
            <h2>The Grand Californian</h2>
            {/* <img className='disney-map' src='https://cdn1.parksmedia.wdprapps.disney.com/media/dvc/en/destinations/list/california/grand-californian-hotel/grand-californian-00-full-2.jpg' alt='Grand Californian Exterior'></img> */}
            {/* <img className='disney-map' src='https://www.disneytouristblog.com/wp-content/uploads/2017/07/grand-californian-lobby-fourth-floor.jpg' alt='Inside the hotel'></img> */}
            {/* <img className='disney-map' src='https://cache.undercovertourist.com/hotel-rooms/disneys-grand-californian-room-96805-18992-16b230c0da5.JPG' alt='Hotel Room'></img> */}

            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src='https://cdn1.parksmedia.wdprapps.disney.com/media/dvc/en/destinations/list/california/grand-californian-hotel/grand-californian-00-full-2.jpg' alt='Grand Californian Exterior' />
                <Card.Body className='card'>
                    <Card.Title>Exterior</Card.Title>
                    <Card.Text className='card-body'>
                    The Grand Californian is one of 3 Resort Hotels to choose from. The most expensive option, and the closest to the park, offers unique craftsman style and unique benefits.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src='https://www.disneytouristblog.com/wp-content/uploads/2017/07/grand-californian-lobby-fourth-floor.jpg' alt='Inside the hotel' />
            <Card.Body className='card'>
                <Card.Title>Exterior</Card.Title>
                <Card.Text className='card-body'>
                The Grand Californian is one of 3 Resort Hotels to choose from. The most expensive option, and the closest to the park, offers unique craftsman style and unique benefits.
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src='https://cache.undercovertourist.com/hotel-rooms/disneys-grand-californian-room-96805-18992-16b230c0da5.JPG' alt='Grand Californian Exterior' />
            <Card.Body className='card'>
                <Card.Title>Exterior</Card.Title>
                <Card.Text className='card-body'>
                The Grand Californian is one of 3 Resort Hotels to choose from. The most expensive option, and the closest to the park, offers unique craftsman style and unique benefits.
                </Card.Text>
            </Card.Body>
            </Card>
            </Row>
        </Container>


        </>
    )
}