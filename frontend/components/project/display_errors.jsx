import React from 'react';

const DisplayErrors = (props) => {

  const errors = props.errors.map((error, index) => {
    return (<li key={index}>{error}</li>);
  });

  return(
        <ul className="errors">
          {errors}
        </ul>
  )
}

export default DisplayErrors
