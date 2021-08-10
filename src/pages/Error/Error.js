import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Error.scss';

export default class Error extends Component {
  render() {
    const {type} = this.props;
    const message = type === 404 ? 'Page not found' : 'Unknown error. Try again later';
    return (
      <div className='error'>
        <h1>An error has occured</h1>
        <h2>{message}</h2>
        <h4>
          <Link to='/'>Go to home page</Link>
        </h4>
      </div>
    )
  }
}
