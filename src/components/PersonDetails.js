import React from 'react';


const PersonDetails = ({person}) => {
  return (
    <div>
      <div className='jumbotron container' style={{textAlign: 'center'}}>
        <h4>{person.name}</h4>
      </div>
        <h5>Hair Color: {person.hair_color}</h5>
        <h5>Eye Color: {person.eye_color}</h5>
        <h5>Gender: {person.gender}</h5>
    </div>
  )
};


export default PersonDetails;
