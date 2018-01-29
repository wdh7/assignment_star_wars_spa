import React from 'react';
import Button from './elements/Button';

const PlanetCard = ({planet}) => {
  return (
    <div className='card'>
      <h4>Planet {planet.name}</h4>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Climate: {planet.climate}</p>
      <Button resource='planets' name={planet.name}>View Details</Button>
    </div>
  )
};


export default PlanetCard;
