import React from 'react'
import { Link } from 'react-router-dom'

import './Posts.scss'

export default function Posts() {

  return (
    <div className='PostsList'>
        {
            [...Array(50).fill().map((_,index) => {
                return {id: index + 1, item: `ElemetName-${index + 1}`}
            })].map(elem => {
                return(
                    <Link
                    key={elem.id}
                    className='PostsList-Item'
                    to={`${elem.id}`}
                    state = {{ post: elem }}
                    >
                        <h2>{elem.item}</h2>
                    </Link>
                )
            })
        }
    </div>
  )
}
