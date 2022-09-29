import React, { useState } from 'react';
import BudgetForm from './budgetForm';
import jsonData from './data.json';
import BudgetModal from './budgetModal';

export default function BudgetTable() {
    const [budgetData, setBudgetData] = useState(jsonData);

    const handleChange = (id) => {
        console.log("change data, add modal");
        const budgetToUpdate = budgetData.filter(info => info.id === id)
        const i = budgetData.indexOf(budgetToUpdate);

        const copyOfBudget = { ...budgetToUpdate}

        const copyOfBudgetList = budgetData.slice()
        copyOfBudgetList[i] = copyOfBudget;

        this.setBudgetData({ budgetData: copyOfBudgetList})
        
    }

    const deleteRow = (index) => {
        console.log("complete delete function");
        setBudgetData((budgetData) => budgetData.filter((_, i) => i !== index));}

    const tableRows = budgetData.map((info, index) => { 
        return (
            <tr>
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
                    <button type='button' className='btn btn-primary' onClick={() => { <BudgetModal/> }}>Update</button>
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
            {/* add key, giving ID */}
        </div>
    );
}