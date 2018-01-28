import React from 'react';

const PlanetCard = ({planet}) => {
  return (
    <div className='card'>
      <h4>Planet {planet.name}</h4>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Climate: {planet.climate}</p>
    </div>
  )
};


export default PlanetCard;
