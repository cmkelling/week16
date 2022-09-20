import React, { useState } from 'react';
import { Form, FormGroup, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function BudgetForm (props) {

    const [name, setName] = useState('');
    const [total, setTotal] = useState('');
    const [plane, setPlane] = useState('');
    const [hotel, setHotel] = useState('');
    const [park, setPark] = useState('');

    const [hopper, setHopper] = useState('');
    const [genie, setGenie] = useState('');
    const [food, setFood] = useState('');
    const [lane, setLane] = useState('');
    const [souvenirs, setSouvenirs] = useState('');
    const [extra, setExtra] = useState('');
  
    const changeName = (event) => {
    setName(event.target.value);
    };
  
    const changeTotal = (event) => {
    setTotal(event.target.value);
    };

    const changePlane = (event) => {
        setPlane(event.target.value);
    };

    const changeHotel = (event) => {
        setHotel(event.target.value);
    };

    const changePark = (event) => {
        setPark(event.target.value);
    };

    const changeHopper = (event) => {
        setHopper(event.target.value);
    };

    const changeGenie = (event) => {
        setGenie(event.target.value);
    };

    const changeLane = (event) => {
        setLane(event.target.value);
    };

    const changeFood = (event) => {
        setFood(event.target.value);
    };

    const changeSouvenirs = (event) => {
        setSouvenirs(event.target.value);
    };

    const changeExtra = (event) => {
        setExtra(event.target.value);
    };
  
    const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      total,
      plane,
      hotel,
      park,
      hopper,
      genie,
      food,
      lane,
      souvenirs,
      extra
    };
    props.func(val);
    clearState();
    };
  
    const clearState = () => {
    setName('');
    setTotal('');
    setPlane('');
    setHotel('');
    setPark('');
    setHopper('');
    setGenie('');
    setFood('');
    setLane('');
    setSouvenirs('');
    setExtra('');
    };

    return (
        <>
            <Form className='container'>
                <FormGroup className='mb-3' controlId='formName'>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control value={ name } type='text' placeholder='First Name Only'/>
                </FormGroup>
                <FormGroup className='mb-3' controlId='formTotalBudget'>
                    <Form.Label>Total Budget Amount</Form.Label>
                    <Form.Control value={ total } type='text' placeholder='Total willing/ saved up to spend'/>
                </FormGroup>
                <Row>
                    <FormGroup className='col-4' controlId='formFixedPlane'>
                        <Form.Label>Plane Ticket</Form.Label>
                        <Form.Control value={ plane } type='text' placeholder='Cost of Ticket'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formFixedHotel'>
                        <Form.Label>Hotel</Form.Label>
                        <Form.Control value={ hotel } type='text' placeholder='Cost of Hotel for Entire Visit'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formFixedTicket'>
                        <Form.Label>Park Ticket</Form.Label>
                        <Form.Control value={ park } type='text' placeholder='Cost of Park Ticket'/>
                    </FormGroup>
                </Row>
                <br/>
                <Row>
                    <FormGroup className='col-6' controlId='formFixedHopper'>
                        <Form.Label>Park Hopper</Form.Label>
                        <Form.Control value={ hopper } type='text' placeholder='Cost of Park Hopper'/>
                    </FormGroup>
                    <FormGroup className='col-6' controlId='formFixedGenie'>
                        <Form.Label>Genie+</Form.Label>
                        <Form.Control value={ genie } type='text' placeholder='Cost of Genie+'/>
                    </FormGroup>
                </Row>
                <br/>
                <Row>
                    <FormGroup className='col-4' controlId='formFood'>
                        <Form.Label>Food</Form.Label>
                        <Form.Control value={ food } type='text' placeholder='Budget for Food'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formLightingLane'>
                        <Form.Label>Lightening Lane</Form.Label>
                        <Form.Control value={ lane } type='text' placeholder='Budget for Lightening Lane'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formSouvenirs'>
                        <Form.Label>Souvenirs</Form.Label>
                        <Form.Control value={ souvenirs } type='text' placeholder='Budget for Souvenirs'/>
                    </FormGroup>
                </Row>
                <br/>
                <FormGroup className='mb-3' controlId='formMisc'>
                        <Form.Label>Extra Expenses</Form.Label>
                        <Form.Control value={ extra } type='text' placeholder='Budget for Extra Expenses'/>
                </FormGroup>
                <Button variant="info" type="submit" value="input" onClick={transferValue}>Submit</Button>

            </Form>
        </>
    )
}