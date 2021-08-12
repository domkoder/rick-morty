import {FaSpinner} from 'react-icons/fa'
import React from 'react'

function Spinner() {
  return <FaSpinner className="spinner" />
}

function CircleButton() {
  return (
    <button
      className="profile__action"
      aria-label="Add to list"
      data-state="tooltip-hidden"
    >
      <FaSpinner />
    </button>
  )
}

function FullPageSpinner() {
  return (
    <div
      style={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </div>
  )
}

export {CircleButton, Spinner, FullPageSpinner}
