import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/rideList';
import RideUpdate from './components/rideUpdateForm';

function Rides() {

    return(
       <> 
        <h2>Rides</h2>
        <List/>
        <RideUpdate/>
        </>
    )
}

export default Rides;