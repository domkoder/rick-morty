import React from 'react'

function Error({error}) {
  // console.log()
  return (
    <div>
      <div className="danger">
        <p>There was an error:</p>
        <pre>{error}</pre>
      </div>
    </div>
  )
}

export default Error
