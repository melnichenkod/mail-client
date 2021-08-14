import React from 'react';
import {Link} from 'react-router-dom';
import './Error.scss';

const errorMessages = {
  404: 'Page not found',
  500: 'Unknown error. Try again later'
}
const Error = (props) => {
  const {type} = props;
  return (
    <div className='error'>
      <h1>An error has occured</h1>
      <h2>{errorMessages[type]}</h2>
      <h4>
        <Link to='/'>Go to home page</Link>
      </h4>
    </div>
  )
}
export default Error;
