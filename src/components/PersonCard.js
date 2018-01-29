import React from 'react';
import Button from './elements/Button';

const PersonCard = ({person}) => {
  return (
    <div className='card'>
      <h4>{person.name}</h4>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Gender: {person.gender}</p>
      <Button resource='people' name={person.name}>View Details</Button>
    </div>
  )
};


export default PersonCard;
