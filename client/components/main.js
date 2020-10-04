import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [userName, setUserName] = React.useState('')

  return (
    <div>
      <p>Repo name</p>
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
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full ml-5"
        onClick
      >
        <Link to={`/${userName}`}> Go </Link>
      </button>
    </div>
  )
}

Main.propTypes = {}

export default Main
