import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
  return (
    <div>
        <h1>404 | Error: page is nor found</h1>
        <button onClick={goBack}>go back</button>
    </div>
  )
}
