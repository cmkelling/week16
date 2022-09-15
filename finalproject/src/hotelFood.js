import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Hotel from './components/hotel';
import Food from './components/food';

function HotelFood() {

    return(
        <>
        <h2>Hotel and Food</h2>
        <br/>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Hotel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Food</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Hotel />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Food />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
    )
}

export default HotelFood;