import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, Row } from 'react-bootstrap';
import BudgetForm from './budgetForm';
import jsonData from './data.json';

export default function BudgetTable() {
    const [budgetData, setBudgetData] = useState(jsonData);

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

    //hook for is editing
    const [isEditing, setIsEditing] = React.useState(false); //false by default
    //hook for editing text
    const [editingText, setEditingText] = React.useState(""); //accepts empty string by default

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (index) => setShow(true);

//delete
    const deleteRow = (index) => {
        console.log("complete delete");
        console.log(index);
        setBudgetData((budgetData) => budgetData.filter((_, i) => i !== index));}

    const tableRows = budgetData.map((info, index) => { 
        return (
            <tr key={index}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.total}</td>
                <td>{info.plane}</td>
                <td>{info.hotel}</td>
                <td>{info.park}</td>
                <td>{info.hopper}</td>
                <td>{info.genie}</td>
                <td>{info.food}</td>
                <td>{info.lane}</td>
                <td>{info.souvenirs}</td>
                <td>{info.extra}</td>
                <td>
                    <button type='button' className='btn btn-danger' onClick={() => deleteRow(index)}>Delete</button>
                    <button type='button' className='btn btn-primary' onClick={() => handleShow()+ editHandler()}>Update</button>
                </td>
            </tr>
        );
    });
//create
    const addRows = (data) => {
        const totalBudget = budgetData.length;
        data.id = totalBudget + 1;
        const updatedBudgetData = [...budgetData];
        updatedBudgetData.push(data);
        setBudgetData (updatedBudgetData);
    };
//update
    //onclick to start editing
    const editHandler = () => {
        setIsEditing(true); //set isEditing to true to start editing
    }

    //onchange to edit text
    const editChangeHandler = (e) => {
        setEditingText(e.target.value); //setting the value of the input to the state
    }

    const saveEditHandler = (e) => { //e is event
        e.preventDefault(); //prevents page from refreshing
        setBudgetData((budgetData) => budgetData.map(data => { //map through budgets to find the one to edit
            if (data.id === budgetData.id) { //comparing the one clicked to the state (budget.id is the id of the one clicked)
                return {
                    ...data, text: editingText //item is the one clicked, text is the property, editingText is the value of the state (the input)
                }
            }
            return data; //returning item if did not match
        }))
        setIsEditing(false); //set isEditing to false to stop editing
    }

    // const updateRow = (index, data) => {
    //     console.log(index);
    //     console.log(data.name);
    //     data.id = index;
    //     const updatedBudgetData = [...budgetData];
    //     updatedBudgetData.splice(index, 1, data);
    //     setBudgetData(updatedBudgetData);
    // }

    // const transferFormValue = (event, index) => {
    //     event.preventDefault();
    //     const clearState = () => {
    //         setName('');
    //         setTotal('');
    //         setPlane('');
    //         setHotel('');
    //         setPark('');
    //         setHopper('');
    //         setGenie('');
    //         setFood('');
    //         setLane('');
    //         setSouvenirs('');
    //         setExtra('');
    //         };
    //     const val = {
    //       name,
    //       total,
    //       plane,
    //       hotel,
    //       park,
    //       hopper,
    //       genie,
    //       food,
    //       lane,
    //       souvenirs,
    //       extra
    //     };
    //     updateRow(index, val);
    //     jsonData.concat([...jsonData], val)
    //     clearState();
  
    //     handleClose();
    //     };
    
    return(
        <div>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Total</th>
                        <th>Plane</th>
                        <th>Hotel</th>
                        <th>Park</th>
                        <th>Hopper</th>
                        <th>Genie</th>
                        <th>Food</th>
                        <th>Lane</th>
                        <th>Souvenirs</th>
                        <th>Extra</th>
                        <th>Delete, Update</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
            <BudgetForm func={addRows}/>
            <Modal className='modal' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Ride</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isEditing ? (<Form className='container' onSubmit={saveEditHandler}>
                        <FormGroup className='mb-3' controlId='formName'>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='First Name Only'/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='formTotalBudget'>
                            <Form.Label>Total Budget Amount</Form.Label>
                            <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Total willing/ saved up to spend'/>
                        </FormGroup>
                        <Row>
                            <FormGroup className='col-4' controlId='formFixedPlane'>
                                <Form.Label>Plane Ticket</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Cost of Ticket'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formFixedHotel'>
                                <Form.Label>Hotel</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Cost of Hotel for Entire Visit'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formFixedTicket'>
                                <Form.Label>Park Ticket</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Cost of Park Ticket'/>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup className='col-6' controlId='formFixedHopper'>
                                <Form.Label>Park Hopper</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Cost of Park Hopper'/>
                            </FormGroup>
                            <FormGroup className='col-6' controlId='formFixedGenie'>
                                <Form.Label>Genie+</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Cost of Genie+'/>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup className='col-4' controlId='formFood'>
                                <Form.Label>Food</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Budget for Food'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formLightingLane'>
                                <Form.Label>Lightening Lane</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Budget for Lightening Lane'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formSouvenirs'>
                                <Form.Label>Souvenirs</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Budget for Souvenirs'/>
                            </FormGroup>
                        </Row>
                        <br/>
                        <FormGroup className='mb-3' controlId='formMisc'>
                                <Form.Label>Extra Expenses</Form.Label>
                                <Form.Control value={ editingText } onChange={editChangeHandler} type='text' placeholder='Budget for Extra Expenses'/>
                        </FormGroup>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                        Save Changes
                        </Button>
                    </Form>) : ( 
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        
                    </Modal.Footer>)} 
                </Modal.Body>
            </Modal>
            {/* add key, giving ID */}
        </div>
    );
}