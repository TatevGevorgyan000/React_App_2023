import React from 'react'

function Component({list, handeleClick}) {
  return (
    <div>
        {
            list.map((elem,index) => {
                return <p key={index}>{elem}</p>
            })
        }
      <button onClick={handeleClick}>Click</button>
    </div>
  )
}

export default Component