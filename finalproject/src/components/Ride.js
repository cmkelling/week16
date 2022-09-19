import react from "react";
import { RideUpdate } from './rideUpdateForm';

export const Ride = (props) => {
    const { ride, updateRide } = props;

    const updateInfo = () => updateRide({...ride, })

    return (
        <div>
            <RideUpdate updateInfo= { updateInfo }/>
        </div>
    )
}