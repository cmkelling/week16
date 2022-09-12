import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function App() { 

  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Disney 2023</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/hotelFood">Hotel + Food</Nav.Link>
            <Nav.Link href="/rides">Rides</Nav.Link>
            <Nav.Link href="/budgeting">Budgeting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/hotelFood'>
          <HotelFood/>
        </Route>
        <Route path='/rides'>
          <Rides/>
        </Route>
        <Route path='/budgeting'>
          <Budgeting/>
        </Route>
      </Routes>
    </Router>
  )

  function Home() {
    return <h2>Home</h2>
  };

  function HotelFood() {
    return <h2>Hotel + Food</h2>
  };

  function Rides() {
    return <h2>Rides</h2>
  };

  function Budgeting() {
    return <h2>Budgeting</h2>
  };
 
}

export default App;
