import React from 'react'

const ErroneousPage = (props) => {
  const emptyVar = null
  return (
    <div>
      {emptyVar.map(elem=> elem)}
    </div>
  );
};
export default ErroneousPage;