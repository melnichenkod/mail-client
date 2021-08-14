import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.scss'
const Sidebar = (props) => {
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
      <div>
        <NavLink exact to="/show-error"
                className='sidebar__link'
                activeClassName='sidebar__link--active'>Show error</NavLink>
      </div>

    </div>
  )
}
export default Sidebar;