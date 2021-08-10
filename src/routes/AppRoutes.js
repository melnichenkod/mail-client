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
    const {emails} = this.props;
    const authenticated = true;
    return (
      <div className='page-wrapper'>
        <ProtectedRoutes authenticated={authenticated} path='/' component={Sidebar} />
        {/* <Route path='/' component={Sidebar} /> */}
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/'
            render={props=>(
              <Inbox emails={emails} {...props}/>
            )}/>
          <Route exact path='/sent' component={Sent}/>
          <Route exact path='/favourites' component={Favourites}/>
          <Route exact path='/show-error' component={ErroneousPage}/>
          <Route path='*' render={(props) => <Error    //redefined function render           
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


