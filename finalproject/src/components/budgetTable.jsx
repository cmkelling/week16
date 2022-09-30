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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteRow = (index) => {
        console.log("complete delete function");
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
                    <button type='button' className='btn btn-primary' onClick={() => handleShow()}>Update</button>
                </td>
            </tr>
        );
    });

    const addRows = (data) => {
        const totalBudget = budgetData.length;
        data.id = totalBudget + 1;
        const updatedBudgetData = [...budgetData];
        updatedBudgetData.push(data);
        setBudgetData (updatedBudgetData);
    };

    const updateRow = (index, data) => {
        console.log(index);
        console.log(index.name);
        const totalBudget = budgetData.length;
        data.id = totalBudget + 1;
        const updatedBudgetData = [...budgetData];
        updatedBudgetData.splice(index - 1, 1, data);
        setBudgetData(updatedBudgetData);
    }

    const transferFormValue = (event, index) => {
        event.preventDefault();
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
        updateRow(val, index);
        jsonData.concat([...jsonData], val)
        clearState();
  
        
        //need to add data to array
        handleClose();
        };

    // const handleChange = () => {
    //     console.log("change data, add modal");
    //     return <Modal>
             
    //     </Modal>
    // }
    
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
                    <Form className='container'>
                        <FormGroup className='mb-3' controlId='formName'>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control value={ name } onChange={(event) => setName(event.target.value)} type='text' placeholder='First Name Only'/>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='formTotalBudget'>
                            <Form.Label>Total Budget Amount</Form.Label>
                            <Form.Control value={ total } onChange={(event) => setTotal(event.target.value)} type='text' placeholder='Total willing/ saved up to spend'/>
                        </FormGroup>
                        <Row>
                            <FormGroup className='col-4' controlId='formFixedPlane'>
                                <Form.Label>Plane Ticket</Form.Label>
                                <Form.Control value={ plane } onChange={(event) => setPlane(event.target.value)} type='text' placeholder='Cost of Ticket'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formFixedHotel'>
                                <Form.Label>Hotel</Form.Label>
                                <Form.Control value={ hotel } onChange={(e) => setHotel(e.target.value)} type='text' placeholder='Cost of Hotel for Entire Visit'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formFixedTicket'>
                                <Form.Label>Park Ticket</Form.Label>
                                <Form.Control value={ park } onChange={(e) => setPark(e.target.value)} type='text' placeholder='Cost of Park Ticket'/>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup className='col-6' controlId='formFixedHopper'>
                                <Form.Label>Park Hopper</Form.Label>
                                <Form.Control value={ hopper } onChange={(e) => setHopper(e.target.value)} type='text' placeholder='Cost of Park Hopper'/>
                            </FormGroup>
                            <FormGroup className='col-6' controlId='formFixedGenie'>
                                <Form.Label>Genie+</Form.Label>
                                <Form.Control value={ genie } onChange={(e) => setGenie(e.target.value)} type='text' placeholder='Cost of Genie+'/>
                            </FormGroup>
                        </Row>
                        <br/>
                        <Row>
                            <FormGroup className='col-4' controlId='formFood'>
                                <Form.Label>Food</Form.Label>
                                <Form.Control value={ food } onChange={(e) => setFood(e.target.value)} type='text' placeholder='Budget for Food'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formLightingLane'>
                                <Form.Label>Lightening Lane</Form.Label>
                                <Form.Control value={ lane } onChange={(e) => setLane(e.target.value)} type='text' placeholder='Budget for Lightening Lane'/>
                            </FormGroup>
                            <FormGroup className='col-4' controlId='formSouvenirs'>
                                <Form.Label>Souvenirs</Form.Label>
                                <Form.Control value={ souvenirs } onChange={(e) => setSouvenirs(e.target.value)} type='text' placeholder='Budget for Souvenirs'/>
                            </FormGroup>
                        </Row>
                        <br/>
                        <FormGroup className='mb-3' controlId='formMisc'>
                                <Form.Label>Extra Expenses</Form.Label>
                                <Form.Control value={ extra } onChange={(e) => setExtra(e.target.value)} type='text' placeholder='Budget for Extra Expenses'/>
                        </FormGroup>
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
            {/* add key, giving ID */}
        </div>
    );
}