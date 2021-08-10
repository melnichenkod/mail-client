import React, { Component } from 'react'
import Error from '../../pages/Error/Error';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  }
  componentDidCatch(error, info){
    this.setState({hasError: true})
  }
  render() {
    const {hasError} = this.state;
    const {children} = this.props;
    if (hasError){
      return <Error type={500} />;
    }
    return (
      children
    )
  }
}
