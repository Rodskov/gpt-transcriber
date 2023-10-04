import React from 'react'

const Result = ({ output }) => {
  return (
    <div className='result-box'>
      <h2>Result: </h2>
      <div className='result-content'>{ output }</div>
    </div>
  )
}

export default Result