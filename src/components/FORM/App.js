import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.scss'

export default function App() {
    const [todo, setTodo] = useState([])
    const [massage, setMassage] = useState("")
    const [specialtodo, setSpecialtodo] = useState([])
    const [x, setX] = useState(true)

    const handeleColor = () => {
        setX(!x)
    }
    const getTodoById = title => {
        // const t = todo.find(elem => elem.id === +id)
        const t = todo.filter(elem => elem.title.includes(title))
        console.log(t);
        setSpecialtodo(t)
    }
    const handeleSubmit = (e) => {
        e.preventDefault()
        setMassage(e.target.elements[0].value);
        e.target.reset()
    }

    useEffect(() => {
        getTodoById(massage)
    },[massage])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => setTodo(response.data))
    },[])

    // const handeleChange = (e) => {
    //     console.log(e);
    //     setMassage(e.target.value)
    // }
  return (
    <div className='Container'>
        <h1 className='Container-Title Container-Title_lg'>Input value is: {massage}</h1>
        <form 
        onSubmit={handeleSubmit} 
        className='Container-Form'>
            <input type='text'/>
            <input type='submit' value='check'/>
        </form>
        <button className='Container-Btn' onClick={handeleColor}>Change Color</button>
        <pre className={`Container-Value Container-Value_${x ? 'dark' : 'lite'}`}>
            {
                specialtodo.map(elem => {
                    return(
                        <React.Fragment key={elem.id}>
                            {JSON.stringify(elem,null,1)}
                        </React.Fragment>
                    )

                })
            }
        </pre>
    </div>
  )
}
