import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [userName, setUserName] = React.useState('')

  return (
    <div>
      <input
        id="input-field"
        type="text"
        className="text-black"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value)
        }}
      />
      <button
        id="search-button"
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick
      >
        <Link to={`/${userName}`}> Go </Link>
      </button>
    </div>
  )
}

Main.propTypes = {}

export default Main
