import React from 'react'

import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function Hotel() {
    return(
        <>
        <Container>
            <Row>
            <h2 className='mx-auto' >The Grand Californian</h2>
            {/* <img className='disney-map' src='https://cdn1.parksmedia.wdprapps.disney.com/media/dvc/en/destinations/list/california/grand-californian-hotel/grand-californian-00-full-2.jpg' alt='Grand Californian Exterior'></img> */}
            {/* <img className='disney-map' src='https://www.disneytouristblog.com/wp-content/uploads/2017/07/grand-californian-lobby-fourth-floor.jpg' alt='Inside the hotel'></img> */}
            {/* <img className='disney-map' src='https://cache.undercovertourist.com/hotel-rooms/disneys-grand-californian-room-96805-18992-16b230c0da5.JPG' alt='Hotel Room'></img> */}

            <Card className='me-3 mb-3' style={{ width: '25rem' }}>
                <Card.Img variant="top" src='https://cdn1.parksmedia.wdprapps.disney.com/media/dvc/en/destinations/list/california/grand-californian-hotel/grand-californian-00-full-2.jpg' alt='Grand Californian Exterior' />
                <Card.Body className='card'>
                    <Card.Title>Exterior</Card.Title>
                    <Card.Text className='card-body'>
                    The Grand Californian is one of 3 Resort Hotels to choose from. The most expensive option, and the closest to the park, offers unique craftsman style and unique benefits.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className='mb-3' style={{ width: '25rem' }}>
            <Card.Img variant="top" src='https://www.disneytouristblog.com/wp-content/uploads/2017/07/grand-californian-lobby-fourth-floor.jpg' alt='Inside the hotel' />
            <Card.Body className='card'>
                <Card.Title>Interior</Card.Title>
                <Card.Text className='card-body'>
                Many amenities are included in your stay. Some perks to highlight are the spa, themed pools, direct access into Disneyland, and next day package delivery. Many dining options are available inside or nearby in Downtown Disney.
                </Card.Text>
            </Card.Body>
            </Card>

            <Card className='me-3' style={{ width: '25rem' }}>
            <Card.Img variant="top" src='https://cache.undercovertourist.com/hotel-rooms/disneys-grand-californian-room-96805-18992-16b230c0da5.JPG' alt='Grand Californian Exterior' />
            <Card.Body className='card'>
                <Card.Title>Room Snapshot</Card.Title>
                <Card.Text className='card-body'>
                Rooms vary depending on which package you choose. Like most hotels, the Grand Californian offers both 2 Queen and 1 King with a day bed. The view off the balcony changes depending on your package and lookout onto many unique and beautiful views.
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Disney%27s_Grand_Californian_Logo.svg/2560px-Disney%27s_Grand_Californian_Logo.svg.png' alt='Grand Californian Logo' />
            <Card.Body className='card'>
                <Card.Title>More Info</Card.Title>
                <Card.Text className='card-body'>
                Want to learn more? Click on the link below!
                <Card.Link href="https://disneyland.disney.go.com/hotels/grand-californian-hotel/?ef_id=Cj0KCQjw94WZBhDtARIsAKxWG-9m2pru5LxHNNk2vHhS4tSGSiq5sPJrWxCdp1ucEsYP6jQqE1bK7OAaAnPuEALw_wcB:G:s&s_kwcid=AL!5054!3!606710902237!e!!g!!grand%20californian&CMP=KNC-FY22_DLR_TRA_DOM_L365AB_RES_RSG_Hotels_EXACT%7CG%7C5222059.DL.AM.01.02%7CMEV2WDX%7CBR%7C606710902237&keyword_id=kwd-26152170%7Cdc%7Cgrand%20californian%7C606710902237%7Ce%7C5054:3%7C&gclid=Cj0KCQjw94WZBhDtARIsAKxWG-9m2pru5LxHNNk2vHhS4tSGSiq5sPJrWxCdp1ucEsYP6jQqE1bK7OAaAnPuEALw_wcB">More Info</Card.Link>
                </Card.Text>
            </Card.Body>
            </Card>
            </Row>
        </Container>


        </>
    )
}