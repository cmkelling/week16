import React from 'react';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';

export default function RideUpdate () {

    return(
        <Form className='container'>
            <Row>
            <FormGroup className='col-6' controlId='rideName'>
                    <Form.Label>Ride Name</Form.Label>
                    <Form.Control type='text' placeholder='Ride Name as Listed'/>
            </FormGroup>
            <FormGroup className='col-6' controlId='rideLine'>
                    <Form.Label>Is there a special line?</Form.Label>
                    <Form.Check/>
            </FormGroup>
            </Row>
            <Row>
            <FormGroup className='col-6' controlId='rideTime'>
                    <Form.Label>Average Ride Times</Form.Label>
                    <Form.Control type='number'/>
            </FormGroup>
            <FormGroup className='col-6' controlId='rideWill'>
                    <Form.Label>Average Time Willing to Wait</Form.Label>
                    <Form.Control type='number'/>
            </FormGroup>
            </Row>
            <br/>
            <Button variant="info" type="submit" value="input">Update</Button>
        </Form>
    )
}