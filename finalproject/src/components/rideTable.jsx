import React, { useState } from 'react';
import RideForm from './rideForm';
import RideData from './rideData';

export default function RideTable() {
    const [rideData, setRideData] = useState(RideData);

    const handleChange = (id) => {
        console.log("change data, add modal");
        const rideToUpdate = rideData.filter(info => info.id === id)
        const i = rideData.indexOf(rideToUpdate);

        const copyOfRide = { ...rideToUpdate}

        const copyOfRideList = rideData.slice()
        copyOfRideList[i] = copyOfRide;

        this.setRideData({ rideData: copyOfRideList})
    }

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteRow = (index) => {
        console.log("complete delete function");
        setRideData((rideData) => rideData.filter((_, i) => i !== index));
    }

    const tableRows = budgetData.map((info, index) => { 
        return (
            <tr>
                <td>{info.id}</td>
                <td>{info.rideName}</td>
                <td>{info.rideLine}</td>
                <td>{info.rideTime}</td>
                <td>{info.rideWill}</td>
                <td>
                    <button type='button' className='btn btn-danger' onClick={() => deleteRow(index)}>Delete</button>
                    <button type='button' className='btn btn-primary' onClick={() => handleShow()}>Update</button>
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
        </div>
    );
}