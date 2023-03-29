import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to='/abaut'>Abaut</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>Posts</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
