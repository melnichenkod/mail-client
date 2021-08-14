import React, {useRef} from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss'

const Login = (props) => {
    const login = useRef(null);
    const password = useRef(null)
    console.log('Login', login);
    console.log('Password', password);
    const {authenticated, signIn} = props;

    const loginUser = () => {
      console.log('login', login.current.value);
      console.log('password', password.current.value);
      signIn({
        login: login.current.value,
        password: password.current.value
      });
    }
    if (authenticated){
      return <Redirect to='/' />
    }
    
    return (
      <div className='login'>
        <h2>Please log in</h2>
        <div className='login__form'>
          <div>
            <input type='text' placeholder='User name' ref={login }/>
          </div>
          <div>
            <input type='password' placeholder='Password' ref={password}/>
          </div>
          <div>
            <button onClick={loginUser}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    )
}
export default Login;
