import React, { Component } from 'react'
class Header extends Component{
  render(){
    const {user} = this.props;
    const userName = (user && user.login) || 'stranger'
    return(
      <div>
        <p>Application header</p>
        <p>Hello, {userName}</p>
      </div>
    )
  }
}

export default Header;