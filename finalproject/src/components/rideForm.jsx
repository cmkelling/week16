import React, { useState } from 'react';
import { Form, FormGroup, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import RideData from './rideData';

export default function RideForm (props) {

    const [rideName, setRideName] = useState('');
    const [rideLine, setLine] = useState('');
    const [rideTime, setTime] = useState('');
    const [rideWill, setWill] = useState('');

    const transferValue = (event) => {
        event.preventDefault();
        const val = {
          rideName,
          rideLine,
          rideTime,
          rideWill
        };
        props.func(val);
        RideData.concat([...RideData, val])//need to add data to array
        clearState();
    };

    const clearState = () => {
        setRideName('');
        setLine('');
        setTime('');
        setWill('');
    };

    return (
        <Form className='container'>
             <Row>
             <FormGroup className='col-6' controlId='rideName'>
                     <Form.Label>Ride Name</Form.Label>
                     <Form.Control value={rideName} onChange={(e) => setName(e.target.value)} type='text' placeholder='Ride Name as Listed'/>
             </FormGroup>
             <FormGroup className='col-6' controlId='rideLine'>
                     <Form.Label>Is there a special line?</Form.Label>
                     <Form.Control value={rideLine} onChange={(e) => setLine(e.target.value)} type='text'/>
             </FormGroup>
             </Row>
             <Row>
             <FormGroup className='col-6' controlId='rideTime'>
                     <Form.Label>Average Ride Times</Form.Label>
                     <Form.Control value={rideTime} onChange={(e) => setTime(e.target.value)} type='text'/>
             </FormGroup>
             <FormGroup className='col-6' controlId='rideWill'>
                     <Form.Label>Average Time Willing to Wait</Form.Label>
                     <Form.Control value={rideWill} onChange={(e) => setWill(e.target.value)} type='text'/>
             </FormGroup>
             </Row>
             <br/>
             <Button variant="info" type="submit" value="input" onClick={transferValue}>Update</Button>
        </Form>
    )
}