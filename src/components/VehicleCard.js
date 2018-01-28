import React from 'react';

const VehicleCard = ({vehicle}) => {
  return (
    <div className='card'>
      <h4>{vehicle.name}</h4>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p># Passengers: {vehicle.passengers}</p>
      <p>Class: {vehicle.vehicle_class}</p>
    </div>
  )
};


export default VehicleCard;
