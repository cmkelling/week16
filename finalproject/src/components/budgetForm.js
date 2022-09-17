import React from 'react';
import { Form, FormGroup, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function BudgetForm (props) {
    return (
        <>
            <Form className='container'>
                <FormGroup className='mb-3' controlId='formName'>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type='text' placeholder='First Name Only'/>
                </FormGroup>
                <FormGroup className='mb-3' controlId='formTotalBudget'>
                    <Form.Label>Total Budget Amount</Form.Label>
                    <Form.Control type='text' placeholder='Total willing/ saved up to spend'/>
                </FormGroup>
                <Row>
                    <FormGroup className='col-4' controlId='formFixedPlane'>
                        <Form.Label>Plane Ticket</Form.Label>
                        <Form.Control type='text' placeholder='Cost of Ticket'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formFixedHotel'>
                        <Form.Label>Hotel</Form.Label>
                        <Form.Control type='text' placeholder='Cost of Hotel for Entire Visit'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formFixedTicket'>
                        <Form.Label>Park Ticket</Form.Label>
                        <Form.Control type='text' placeholder='Cost of Park Ticket'/>
                    </FormGroup>
                </Row>
                <br/>
                <Row>
                    <FormGroup className='col-6' controlId='formFixedHopper'>
                        <Form.Label>Park Hopper</Form.Label>
                        <Form.Control type='text' placeholder='Cost of Park Hopper'/>
                    </FormGroup>
                    <FormGroup className='col-6' controlId='formFixedGenie'>
                        <Form.Label>Genie+</Form.Label>
                        <Form.Control type='text' placeholder='Cost of Genie+'/>
                    </FormGroup>
                </Row>
                <br/>
                <Row>
                    <FormGroup className='col-4' controlId='formFood'>
                        <Form.Label>Food</Form.Label>
                        <Form.Control type='text' placeholder='Budget for Food'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formLightingLane'>
                        <Form.Label>Lightening Lane</Form.Label>
                        <Form.Control type='text' placeholder='Budget for Lightening Lane'/>
                    </FormGroup>
                    <FormGroup className='col-4' controlId='formSouvenirs'>
                        <Form.Label>Souvenirs</Form.Label>
                        <Form.Control type='text' placeholder='Budget for Souvenirs'/>
                    </FormGroup>
                </Row>
                <br/>
                <FormGroup className='mb-3' controlId='formMisc'>
                        <Form.Label>Extra Expenses</Form.Label>
                        <Form.Control type='text' placeholder='Budget for Extra Expenses'/>
                </FormGroup>
                <Button variant="info" type="submit" value="input">Submit</Button>

            </Form>
        </>
    )
}