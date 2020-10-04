import React from 'react'
// import Main from './main'
import { useParams, Link } from 'react-router-dom'

const Replist = (a) => {
  const { userName } = useParams()

  return (
    <div>
      {a.repos.length === 0 && <div> No element </div>}
      {a.repos.map((rep) => {
        return (
          <ul key={rep.name}>
            <li>
              <Link to={`/${userName}/${rep.name}`}> {rep.name} </Link>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

Replist.propTypes = {}

export default Replist
