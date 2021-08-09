import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../containers/Sidebar/Sidebar';
import Login from '../pages/Login/Login';
import Inbox from '../pages/Inbox/Inbox';
import Sent from '../pages/Sent/Sent';
import Favourites from '../pages/Favourites/Favourites';
import Error from '../pages/Error/Error';
import './appRoutes.scss'

export default class AppRoutes extends Component {
  render() {
    const {emails} = this.props
    return (
      <div className='page-wrapper'>
        <Route path='/' component={Sidebar} />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/inbox'
            render={props=>(
              <Inbox emails={emails} {...props}/>
            )}/>
          <Route exact path='/sent' component={Sent}/>
          <Route exact path='/favourites' component={Favourites}/>
          <Route path='*' render={(props) => <Error    //redefined function render           
                                                    type={404}
                                                    {...props}/>  }/>
        </Switch>
      </div>
    )
  }
}


