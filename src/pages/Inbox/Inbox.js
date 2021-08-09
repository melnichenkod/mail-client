import React, { Component } from 'react'
import Emails from '../../containers/Emails/Emails'
export default class Inbox extends Component {
  render() {
    const {emails} = this.props;
    const noEmails = (<p>No emails found</p>)
    return (
      <div>
        {emails.length === 0 ? noEmails : <Emails emails={emails}/>}
      </div>
    )
  }
}
