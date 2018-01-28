import React from 'react';

const PersonCard = ({person}) => {
  return (
    <div className='card'>
      <h4>{person.name}</h4>
      <p>Hair Color: {person.hair_color}</p>
      <p>Eye Color: {person.eye_color}</p>
      <p>Gender: {person.gender}</p>
    </div>
  )
};


export default PersonCard;
