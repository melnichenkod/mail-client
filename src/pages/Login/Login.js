import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.login = React.createRef(null);
    this.password = React.createRef(null)
  }
  signIn = () => {
    console.log('login', this.login.current.value);
    console.log('password', this.password.current.value);
    this.props.signIn({
      login: this.login.current.value,
      password: this.password.current.value
    });
  }
  render() {
    console.log('Login', this.login);
    console.log('Password', this.password);
    const {authenticated} = this.props;
    if (authenticated){
      return <Redirect to='/' />
    }

    
    return (
      <div className='login'>
        <h2>Please log in</h2>
        <div className='login__form'>
          <div>
            <input type='text' placeholder='User name' ref={this.login }/>
          </div>
          <div>
            <input type='password' placeholder='Password' ref={this.password}/>
          </div>
          <div>
            <button onClick={this.signIn}>
              Sign in
            </button>
          </div>
        </div>
      </div>

    )
  }
}
