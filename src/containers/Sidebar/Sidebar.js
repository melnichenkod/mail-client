import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.scss'
export default class Sidebar extends Component{
  render(){
    return (
      <div className='sidebar'>
        <div>
          <NavLink exact to="/"
                  className='sidebar__link'
                  activeClassName='sidebar__link--active'>Inbox</NavLink>
        </div>
        <div>
          <NavLink exact to="/sent"
                  className='sidebar__link'
                  activeClassName='sidebar__link--active'>Sent</NavLink>
        </div>
        <div>
          <NavLink exact to="/favourites"
                  className='sidebar__link'
                  activeClassName='sidebar__link--active'>Favourites</NavLink>
        </div>
        <div>
          <NavLink exact to="/unknown-route"
                  className='sidebar__link'
                  activeClassName='sidebar__link--active'>Unknown route</NavLink>
        </div>

      </div>
    )
  }
}