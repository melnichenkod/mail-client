import React, { Component } from 'react'
import Error from '../../pages/Error/Error';
import {withRouter} from 'react-router-dom'

class ErrorBoundary extends Component {
  state = {
    hasError: false
  }
  componentDidCatch(error, info){
    this.setState({hasError: true})
  }
  componentDidUpdate(prevProps){
    const {location} = this.props;
    //debugger;
    if (location !== prevProps.location){
      this.setState({hasError: false})
    }
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

export default withRouter(ErrorBoundary);
