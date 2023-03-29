import React from 'react'
import Abaut from './Abaut'
import Blog from './Blog'
import Home from './Home'
import Navbar from './Navbar'
import ErrorPage from './ErrorPage'
import Posts from './Posts'
import Post from './Post'

import { Routes, Route } from 'react-router-dom'

import './App.scss'

export default function App() {

//  const [color,setColor] = useState(true)
//  const [elem, setElem] = useState(true)

//  const handeleClick = () => {
//   setColor(!color)
//  }
//  const handeleHeid = () => {
//   setElem(!elem)
//  }
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/abaut' element={<Abaut />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/posts/:id' element={<Post />}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>

          {/* {elem ? <div className={color ? 'red' : 'green'}></div> : null}
          <button onClick={handeleClick}>change color</button>
          <button onClick={handeleHeid}>{elem ? 'heid' : 'unhide'}</button> */} 
          {/* arajadranq */}
    </div>
  )
}
