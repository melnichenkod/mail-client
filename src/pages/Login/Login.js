import React, { Component } from 'react';
import './Login.scss'

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h2>Please log in</h2>
        <div className='login__form'>
          <div>
            <input type='text' placeholder='User name'/>
          </div>
          <div>
            <input type='password' placeholder='Password'/>
          </div>
          <div>
            <button>
              Sign in
            </button>
          </div>
        </div>
      </div>

    )
  }
}
