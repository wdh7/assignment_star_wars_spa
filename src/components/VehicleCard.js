import React from 'react';
import Button from './elements/Button';

const VehicleCard = ({vehicle}) => {
  return (
    <div className='card'>
      <h4>{vehicle.name}</h4>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p># Passengers: {vehicle.passengers}</p>
      <p>Class: {vehicle.vehicle_class}</p>
      <Button resource='vehicles' name={vehicle.name}>View Details</Button>
    </div>
  )
};


export default VehicleCard;
