import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';

import Map from './components/map';

function Home() {

    return(
       <>
       <br/>
        <h2>Welcome</h2>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://ychef.files.bbci.co.uk/976x549/p09sgj0h.jpg"
                    alt="Welcome to our Disney Trip"
                />
                <Carousel.Caption>
                <h3>Welcome to our Disney Trip</h3>
                <p>Step inside for more information on what awaits in February!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://s.hdnux.com/photos/01/27/04/26/22824320/3/rawImage.jpg"
                    alt="Food and Hotel"
                />

                <Carousel.Caption>
                    <h3>Hotel and Food</h3>
                    <p>Take a peek inside the Grand Californian and snag a short list of food options available in each portion of the park.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dvcshop.com/wp-content/uploads/2021/10/DCA-e1636776448703.jpg"
                    alt="Rides and Ride Times"
                />

                <Carousel.Caption>
                    <h3>Rides</h3>
                    <p>
                    Find information on rides and their average ride times, including any special lines.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/en/3/30/Disney_Dollar.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Budgeting</h3>
                    <p>
                    Fill out a form to see what and where your budget takes you both big and small!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <br/>
        <Map/>
       

    </>

    )
}

export default Home;