import React, { Component } from 'react'

export default class ErroneousPage extends Component {
  render() {
    const emptyVar = null
    return (
      <div>
        {emptyVar.map(elem=> elem)}
      </div>
    )
  }
}
