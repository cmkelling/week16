import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, FormGroup, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import RideForm from './rideForm';
import RideData from './rideData';

export default function RideTable() {
    const [rideData, setRideData] = useState(RideData);

    const [rideName, setRideName] = useState('');
    const [rideLine, setLine] = useState('');
    const [rideTime, setTime] = useState('');
    const [rideWill, setWill] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => setShow(true);


    const deleteRow = (index) => {
        console.log("complete delete function");
        setRideData((rideData) => rideData.filter((_, i) => i !== index));
    }

    const tableRows = rideData.map((info, index) => { 
        return (
            <tr key={index}>
                <td>{info.id}</td>
                <td>{info.rideName}</td>
                <td>{info.rideLine}</td>
                <td>{info.rideTime}</td>
                <td>{info.rideWill}</td>
                <td>
                    <button type='button' className='btn btn-danger' onClick={() => deleteRow(index)}>Delete</button>
                    <button type='button' className='btn btn-primary' onClick={handleShow}>Update</button>
                </td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalRides = rideData.length;
        data.id = totalRides + 1;
        const updatedRideData = [...rideData];
        updatedRideData.push(data);
        setRideData (updatedRideData);
    };

    const updateRow = (index, data) => {
        // const totalRides = rideData.length;
        console.log(index)
        console.log(data.id)
        data.id = index
        const updatedRideData = [...rideData];
        updatedRideData.splice(index, 1, data);
        setRideData (updatedRideData);
    };

    

    const transferFormValue = (event, index) => {
        event.preventDefault();
        const val = {
          rideName,
          rideLine,
          rideTime,
          rideWill
        };
        updateRow(index, val);
        RideData.concat([...RideData, val])//need to add data to array
        clearState();

        handleClose();
    };

    const clearState = () => {
        setRideName('');
        setLine('');
        setTime('');
        setWill('');
    };

    return(
        <div>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Special Line</th>
                        <th>Avg Wait</th>
                        <th>Avg Will to Wait</th>
                        <th>Delete, Update</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            <RideForm func={addRows}/>
            {/* add key, giving ID */}

            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Ride</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form className='container'>
             <Row>
             <FormGroup className='col-6' controlId='rideName'>
                     <Form.Label>Ride Name</Form.Label>
                     <Form.Control value={rideName} onChange={(e) => setRideName(e.target.value)} type='text' placeholder='Ride Name as Listed'/>
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
        </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={transferFormValue}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}