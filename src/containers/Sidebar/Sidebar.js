import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Sidebar extends Component{
  render(){
    return (
      <div>
        <div>
          <NavLink exact to="/inbox" activeClassName='active-link'>Inbox</NavLink>
        </div>
        <div>
          <NavLink exact to="/sent" activeClassName='active-link'>Sent</NavLink>
        </div>
        <div>
          <NavLink exact to="/favourites" activeClassName='active-link'>Favourites</NavLink>
        </div>

      </div>
    )
  }
}