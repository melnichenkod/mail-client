import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from '../containers/Sidebar/Sidebar';
import Login from '../pages/Login/Login';
import Inbox from '../pages/Inbox/Inbox';
import Sent from '../pages/Sent/Sent';
import Favourites from '../pages/Favourites/Favourites';
import Error from '../pages/Error/Error';
import ErroneousPage from '../pages/ErroneousPage/ErroneousPage';
import './appRoutes.scss'

class AppRoutes extends Component {
  render() {
    const {emails, signIn, user} = this.props;
    const authenticated = user !== null;
    return (
      <div className='page-wrapper'>
        <ProtectedRoutes authenticated={authenticated} path='/' component={Sidebar} />
        {/* <Route path='/' component={Sidebar} /> */}
        <Switch>
          <Route exact path='/login' render={(props) => {
                                         return (<Login authenticated={authenticated} signIn={signIn}
                                                {...props} />)} }/>
          <ProtectedRoutes authenticated={authenticated} exact path='/'
            render={props=>(
              <Inbox emails={emails} {...props}/>
            )}/>
          <ProtectedRoutes authenticated={authenticated} exact path='/sent' component={Sent}/>
          <ProtectedRoutes authenticated={authenticated} exact path='/favourites' component={Favourites}/>
          <ProtectedRoutes authenticated={authenticated} exact path='/show-error' component={ErroneousPage}/>
          <ProtectedRoutes authenticated={authenticated} path='*' render={(props) => <Error    //redefined function render           
                                                    type={404}
                                                    {...props}/>  }/>
        </Switch>
      </div>
    )
  }
}

const ProtectedRoutes = ({component: Component, authenticated, ...rest}) => { //componenent: Component - renamed variable
  return (
    <Route {...rest} render={(props) => {
      if (authenticated) {
        return <Component {...props} /> //rendering variable Component, must begin with a capital letter
      }
      return <Redirect to='/login' />
    }}/>
  )
}
export default AppRoutes;


