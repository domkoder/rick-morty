import React from 'react'

function Error({error}) {
  return (
    <div>
      <div className="danger">
        <p>There was an error:</p>
        <pre>{error.error}</pre>
      </div>
    </div>
  )
}

export default Error
