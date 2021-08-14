import React from 'react'
const Header = (props) => {
  const {user} = props;
  const userName = (user && user.login) || 'stranger'
  return(
    <div>
      <p>Application header</p>
      <p>Hello, {userName}</p>
    </div>
  )
}

export default Header;