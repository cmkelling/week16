import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RideTable from './components/rideTable';

function Rides() {

    return(
       <> 
        <h2>Rides</h2>
        {/* <List/> */}
        <RideTable/>
        </>
    )
}

export default Rides;