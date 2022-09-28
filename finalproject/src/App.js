import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './App.css'

import Home from './home';
import Budgeting from './budgeting';
import HotelFood from './hotelFood';
import Rides from './rides';

function App() { 

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='dis-knee' as={Link} to="/">Disney 2023</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='dis-knee' as={Link} to="./home">Home</Nav.Link>
            <Nav.Link className='dis-knee' as={Link} to="./hotelFood">Hotel + Food</Nav.Link>
            <Nav.Link className='dis-knee' as={Link} to="./rides">Rides</Nav.Link>
            <Nav.Link className='dis-knee' as={Link} to="./budgeting">Budgeting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/hotelFood' element={<HotelFood/>}/>
          <Route path='/rides' element={<Rides/>}/>
          <Route path='/budgeting' element={<Budgeting/>}/>
        </Routes>
      
    </div>
  )
}

export default App;
