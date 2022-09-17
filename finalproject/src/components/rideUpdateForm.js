import React from 'react';
import { Form } from 'react-bootstrap';

export default function RideUpdate () {

    return(
        <Form>
            <FormGroup className='mb-3' controlId='rideName'>
                    <Form.Label>Ride Name</Form.Label>
                    <Form.Control type='text' placeholder='Ride Name as Listed'/>
            </FormGroup>
            <FormGroup className='mb-3' controlId='rideTime'>
                    <Form.Label>Average Ride Times</Form.Label>
                    <Form.Control type='number'/>
            </FormGroup>
            <FormGroup className='mb-3' controlId='rideLine'>
                    <Form.Label>Is there a special line?</Form.Label>
                    <Form.Control type='checkbox' checked={ true }/>
            </FormGroup>
            <FormGroup className='mb-3' controlId='rideWill'>
                    <Form.Label>Average Time Willing to Wait</Form.Label>
                    <Form.Control type='number'/>
            </FormGroup>
        </Form>
    )
}