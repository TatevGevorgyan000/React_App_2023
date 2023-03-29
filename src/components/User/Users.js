import React from 'react'
import User from './User'

export default function Users({arr, handeleDelete}) {
  return (
    <div className='Users'>
        {
            arr.map(elem => {
                return <User user={elem} key={elem.id} handeleDelete={handeleDelete}/>
            })
        }
    </div>
  )
}
