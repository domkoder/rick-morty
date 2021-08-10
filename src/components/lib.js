import {FaSpinner} from 'react-icons/fa'
import React from 'react'

function Spinner() {
  return <FaSpinner />
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

export {CircleButton, Spinner}
