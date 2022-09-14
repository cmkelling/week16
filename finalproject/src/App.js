import React from 'react';
import { BrowserRouter as Routes, Route, Link, useRouteMatch, BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import Home from './home';
import Budgeting from './budgeting';
import HotelFood from './hotelFood';
import Rides from './rides';

function App() { 

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="./home">Disney 2023</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="./home">Home</Nav.Link>
            <Nav.Link as={Link} to="./hotelFood">Hotel + Food</Nav.Link>
            <Nav.Link as={Link} to="./rides">Rides</Nav.Link>
            <Nav.Link as={Link} to="./budgeting">Budgeting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
          <Routes>
          <Route path='/home' element={<Home/>}/>
          </Routes>
          <Routes>
          <Route path='/hotelFood' element={<HotelFood/>}/>
          </Routes>
          <Routes>
          <Route path='/rides' element={<Rides/>}/>
          <Route path='/budgeting' element={<Budgeting/>}/>
          </Routes>
        </Routes>
      
    </div>
  )
}

export default App;
