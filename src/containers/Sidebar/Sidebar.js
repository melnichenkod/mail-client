import React, { Component } from 'react'

export default class Sidebar extends Component{
  render(){
    return (
      <div>
        <div>
          <a href="/inbox">Inbox</a>
        </div>
        <div>
          <a href="/sent">Sent</a>
        </div>
        <div>
          <a href="/favourites">Favourites</a>
        </div>

      </div>
    )
  }
}