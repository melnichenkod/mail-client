import React from 'react';
import Emails from '../../containers/Emails/Emails';

const Inbox = (props) => {
  const {emails} = props;
  const noEmails = (<p>No emails found</p>)
  return (
    <div>
      {emails.length === 0 ? noEmails : <Emails emails={emails}/>}
    </div>
  )
}

export default Inbox;
