import React, { useRef, useState } from 'react'

export default function App() {

    const [inp, setInp] = useState("")
    const data = useRef(null)

    const hendeleSubmit = (e) => {
        e.preventDefault()
        setInp(data.current.value)
    }
    console.log(inp,'inp');
    console.log(data,'value');
  return (
    <div>
        <h1>value: {inp}</h1>
        <form onSubmit={hendeleSubmit}>
            <input type='text' ref={data}/>
            <input type='submit' value='add'/>
        </form>
    </div>
  )
}
