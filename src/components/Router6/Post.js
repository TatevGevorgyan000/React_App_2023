import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Post() {
    const { id } = useParams()
    const location = useLocation()
    console.log(location, 'location');
    console.log(useParams());
  return (
    <div>
        <h1>Duq aycelel eq {id} hamari post ej</h1>
        <pre>{JSON.stringify(location.state.post, null, 1)}</pre>
        <Link to='/posts'>Go Back</Link>
    </div>
  )
}
