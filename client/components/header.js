import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import { history } from '../redux'

const Header = ({ repos }) => {
  const { userName, repositoryName } = useParams()

  if (repositoryName) {
    return (
      <div>
        <img src={repos.avatar_url} alt="" />
        {userName} {repositoryName}
        <div>
          <button type="button" className="bg-indigo-500" onClick>
            <Link to="/"> Home </Link>
          </button>

          <button type="button" className="bg-indigo-500" onClick>
            <Link to={`/${userName}`}> To replist </Link>
          </button>
        </div>
      </div>
    )
  }

  if (userName) {
    return (
      <div>
        <img src={repos.avatar_url} alt="" />
        <div>
          {userName}
          <button type="button" className="bg-indigo-500" onClick>
            <Link to="/"> Home </Link>
          </button>
        </div>
      </div>
    )
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        {userName} {repositoryName}
      </div>
    </nav>
  )
}

export default React.memo(Header)
