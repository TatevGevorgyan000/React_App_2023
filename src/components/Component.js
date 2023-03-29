import React from 'react'

function Component({obj}) {
  return (
    <div className='user'>
       {Object.keys(obj).map(elem => {
        return <h1>{elem} : {obj[elem]}</h1>
       })}
    </div>
  )
}

export default Component