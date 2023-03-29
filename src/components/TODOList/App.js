import React, { useState } from 'react'
import MainForm from './MainForm'
import BlogList from './BlogList'

import './sass/App.scss'

export default function App() {
  const [initalValue, setInitalValue] = useState([])

  return (
    <div className='Container'>
        <MainForm initalValue={initalValue} setInitalValue={setInitalValue}/>
        <BlogList data={initalValue}/>
    </div>
  )
}
