import React from 'react'
import Email from '../../components/Email/Email';

const Emails = (props) =>{
    const {emails} = props;
    const emailCards = emails.map((email) => {
      return <Email key={email.id} email={email}/>
    })
    return(
      <>
        {emailCards}
      </>
    )
}
export default Emails;