import React, { useState } from 'react';
import { Button, Form, FormGroup, Row } from 'react-bootstrap';

export default function RideUpdate (props) {
    const { rideName, setName }=useState('');
    const { rideLine, setLine }=useState('');
    const { rideTime, setTime }=useState(undefined);
    const { rideWill, setWill }=useState('');

    const handleInput = (e) => {
        const int= parseInt(e.target.value, 10);
        setTime(int >= 0 ? int: '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (rideName && rideTime && rideWill) {
            props.updateRide({rideName, rideLine, rideTime, rideWill});
            setName('');
            setLine();
            setTime();
            setWill();
        } else {
            console.log('Invalid Input');
        }
    }

    return(
        <Form onSubmit={onSubmit} className='container'>
            <Row>
            <FormGroup className='col-6' controlId='rideName'>
                    <Form.Label>Ride Name</Form.Label>
                    <Form.Control value={rideName} onChange={(e) => setName(e.target.value)} type='text' placeholder='Ride Name as Listed'/>
            </FormGroup>
            <FormGroup className='col-6' controlId='rideLine'>
                    <Form.Label>Is there a special line?</Form.Label>
                    <Form.Check value={rideLine} onChange={(e) => setLine(e.target.value)}/>
            </FormGroup>
            </Row>
            <Row>
            <FormGroup className='col-6' controlId='rideTime'>
                    <Form.Label>Average Ride Times</Form.Label>
                    <Form.Control value={rideTime} onChange={(e) => setTime(e.target.value)} type='number'/>
            </FormGroup>
            <FormGroup className='col-6' controlId='rideWill'>
                    <Form.Label>Average Time Willing to Wait</Form.Label>
                    <Form.Control value={rideWill} onChange={(e) => setWill(e.target.value)} type='number'/>
            </FormGroup>
            </Row>
            <br/>
            <Button variant="info" type="submit" value="input">Update</Button>
        </Form>
    )
}