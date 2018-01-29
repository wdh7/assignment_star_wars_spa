import React from 'react';

const VehicleDetails = ({vehicle}) => {
  return (
    <div>
      <div className='jumbotron container' style={{textAlign: 'center'}}>
        <h4>{vehicle.name}</h4>
      </div>
        <h5>Model: {vehicle.model}</h5>
        <h5>Manufacturer: {vehicle.manufacturer}</h5>
        <h5># Passengers: {vehicle.passengers}</h5>
        <h5>Class: {vehicle.vehicle_class}</h5>
    </div>
  )
}


export default VehicleDetails;
