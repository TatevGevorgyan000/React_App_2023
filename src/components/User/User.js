import React from 'react'
import PropTypes from 'prop-types'

export default function User({user,handeleDelete}) {
  return (
    <article>
        <img src={user.avatar} alt={`user-${user.id}`}/>
        <p>Email : {user.email}</p>
        <p>Name : {user.first_name}</p>
        <button className='delete-btn' onClick={() => handeleDelete(user.id)}>X</button>
    </article>
  )
}


User.propTypes = {
  handeleDelete: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id:PropTypes.number,
    avatar: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
  })
}