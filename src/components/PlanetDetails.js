import React, { Component } from 'react';

const PlanetDetails = ({planet}) => {
  return (
    <div>
      <div className='jumbotron container' style={{textAlign: 'center'}}>
        <h4>{planet.name}</h4>
      </div>
        <h5>Population: {planet.population}</h5>
        <h5>Terrain: {planet.terrain}</h5>
        <h5>Climate: {planet.climate}</h5>
    </div>
  )
}

export default PlanetDetails;
