import React, { Component } from 'react';
import { Ride } from './Ride';
import { ridesAPI } from '../rest/RidesAPI';


export default class List extends React.Component{
    constructor(){
        super()
        this.state = {
            rides: []
        };
    }

    checkRideName = (ride) => {
        console.log("Shows a ride object:", ride); //Shows a room object in the console
    
        //If the room name is null or empty return an empty string
        if (ride=== null || ride=== "") {
          return "";
        }
        //If the room name is not null or empty return the room name
        else {
          return ride.name;
        }
      };
    
      //function to check if the room area is null or empty
      checkRoomTime = (ride) => {
        //If the room area is null or empty return an empty string
        if (ride === null || ride === "") {
          return "";
        }
        //If the room area is not null or empty return the room area
        else {
          return ride.time;
        }
      };
    

    fetchRides = async () => {
        const rides = await ridesAPI.get();
        this.setState({ rides });
    };

    updateRide = async (updatedRide) => {
        await ridesAPI.put(updatedRide);
        this.fetchRides();
    };
    render () {
        //move 16-28 above render
        function componentDidMount(){
            this.fetchRides()
        };
        return(
            <div className='ride-list'>
                {componentDidMount()}
                {this.state.rides.map((ride) => (
                    <Ride
                        ride = { ride }
                        key = { ride._id }
                        updateRide = { this.updateRide }
                    />
                ))}
            </div>
        )

    }
    
    



    // let apiEndpoint = 'https://631d211d789612cd07a69e37.mockapi.io/v1/Rides';



    // let ridesArray = [];

    // const getRides = async () => {
    //     try {
    //       const resp = await fetch(apiEndpoint);
    //       const data = await resp.json();
    //       console.log(data);
          
    //       return data;
    //     } catch (error) {
    //       console.log("Oh no! There was an error with getting your ride.", error);
    //     }
    // };

    // useEffect(
    //     () => {
    //         // setRides(getRides());
    //         ridesArray.push(getRides());
    //         setRides(ridesArray)
    //         console.log("test2", ridesArray[0]);
    //     }, []
    // )
    
    
    // return (
    //     <div>
    //         Test
    //         {Rides.map((ride) => {<div>{ride.name} Test1</div>})}
    //     </div>

    // )
}