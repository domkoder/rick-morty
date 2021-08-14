import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'

function CircleButton({label, variance, update}) {
  return (
    <button
      className="profile__action tooltip"
      aria-label={label}
      data-state="tooltip-hidden"
      onClick={update}
    >
      <span className="tooltip__text">{label}</span>
      {variance === 'add' ? (
        <FaPlusCircle style={{color: '#2e6ae7'}} />
      ) : variance === 'remove' ? (
        <FaMinusCircle style={{color: '#ef5350'}} />
      ) : (
        <FaMinusCircle />
      )}
    </button>
  )
}

export default CircleButton
