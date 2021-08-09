import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


export default class AppRoutes extends Component {
  render() {
    return (
      <>
        <Route path='/' component={Sidebar} />
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/inbox' component={Inbox}/>
          <Route exact path='/sent' component={Sent}/>
          <Route exact path='/favourites' component={Favourites}/>
          <Route path='*' render={(props) => <Error    //redefined function render           
                                                    type={404}
                                                    {...props}/>  }/>
        </Switch>
      </>
    )
  }
}

export default AppRoutes
