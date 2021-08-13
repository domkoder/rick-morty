import {Link} from 'react-router-dom'

function NotFoundScreen() {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. <Link to="/characters">Go home</Link>
      </div>
    </div>
  )
}

export default NotFoundScreen
