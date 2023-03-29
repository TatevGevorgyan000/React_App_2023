import React, { useState } from 'react'
import MainList from './MainList'

export default function App() {
  const [data, setData] = useState([
    {id: 1, name: "Terminator", type: "action", stock: 6, rate: 2},
    {id: 2, name: "Terminator", type: "action", stock: 8, rate: 3},
    {id: 3, name: "Terminator", type: "action", stock: 9, rate: 3},
    {id: 4, name: "Terminator", type: "action", stock: 5, rate: 19},
  ])

  const handeleDelete = (id) => {
    const foo = data.filter(elem => elem.id !== id);
    setData(foo)
  }
  return (
    <div>
        <MainList data={data} handeleDelete={handeleDelete}/>
    </div>
  )
}
