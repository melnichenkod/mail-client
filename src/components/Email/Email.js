import React from 'react'

const Email = (props) => {
  const {email} = props;

  if (!email){
    return null
  }

  return (
    <div className='email'>
      <h2 className='email__topic'>{email.topic}</h2>
      <p className='email__body'>{email.body}</p>
    </div>
  )
}

export default Email;