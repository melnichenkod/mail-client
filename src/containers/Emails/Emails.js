import React, { Component } from 'react'
import Email from '../../components/Email/Email';

export default class Emails extends Component{
  render(){
    const {emails} = this.props;
    const emailCards = emails.map((email) => {
      return <Email key={email.id} email={email}/>
    })
    return(
      <>
        {emailCards}
      </>
    )
  }
}