import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = ({ repos }) => {
  const { userName, repositoryName } = useParams()

  if (repositoryName) {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div id="repository-name">
          <img
            src={repos.avatar_url}
            className="inline-block h-10 w-10 rounded-full text-white shadow-solid mr-2"
            alt=""
          />
          {userName} {repositoryName}
          <div>
            <button
              id="go-back"
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick
            >
              <Link to="/"> Home </Link>
            </button>

            <button
              id="go-repository-list"
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick
            >
              <Link to={`/${userName}`}> To replist </Link>
            </button>
          </div>
        </div>
      </nav>
    )
  }

  if (userName) {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div>
          <img
            src={repos.avatar_url}
            className="inline-block h-10 w-10 rounded-full text-white shadow-solid mr-2"
            alt=""
          />

          <div className="text-left grid grid-cols-3 divide-x divide-gray-400" id="repository-name">
            {userName}
            <button
              id="go-back"
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick
            >
              <Link to="/"> Home </Link>
            </button>
          </div>
        </div>
      </nav>
    )
  }
  return (
    <nav className="flex items-center justify-center flex-wrap bg-teal-500 p-6">
      <div>
        <p className="flex mx-auto "> GitHub Browser</p>
      </div>
    </nav>
  )
}

export default React.memo(Header)
