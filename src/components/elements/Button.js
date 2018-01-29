import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({resource, name, children}) => {
  return (
    <Link to={`/${resource}/${name}`}>
      <button>
        {children}
      </button>
    </Link>
  )
};


export default Button;
