import React, { useEffect, useState } from 'react';


export default function List (){

    // let apiEndpoint = 'https://631d211d789612cd07a69e37.mockapi.io/v1/Rides';

    const [Rides, setRides] = useState([]);
    useEffect(() => {
    RidesGet()
    }, [])

    const RidesGet = () => {
        fetch("https://631d211d789612cd07a69e37.mockapi.io/v1/Rides")
          .then(res => res.json())
          .then(
            (result) => {
              setRides(result)
            }
        )
    }



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