import React from 'react'
// import Main from './main'
import { useParams, Link } from 'react-router-dom'

const Replist = ({ repos }) => {
  const { userName } = useParams()

  return (
    <div>
      {repos.length === 0 && <div> No element </div>}
      {repos.map((rep) => {
        return (
          <div>
            <Link to={`/${userName}/${rep.name}`}> {rep.name} </Link>
          </div>
        )
      })}
    </div>
  )
}

Replist.propTypes = {}

export default Replist
