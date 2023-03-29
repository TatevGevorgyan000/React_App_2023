import React, { useReducer } from 'react'
import { FETCHING_FAILUR, FETCHING_START, FETCHING_SUCCESS } from './actionTypes'
import { initialState, postReducer } from './postReducer'

export default function Post() {

    const [state, dispatch] = useReducer(postReducer, initialState)

    const handeleFetch = () => {
        dispatch({ type: FETCHING_START} )
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            if(res.status === 200) {
                return res.json()
            }else{
                throw new Error('invalid url')
            }
        })
        .then(data => {
            dispatch({ type: FETCHING_SUCCESS, payload: data})
        })
        .catch(err => {
            dispatch({type: FETCHING_FAILUR})
        })
    }
  return (
    <div>
        <h1>Post</h1>
        <p>{state.post?.title}</p>
        <span>{state.error ? "Fetch Faild" : null}</span>
        <button onClick={handeleFetch}>
            {state.loading ? "Wait" : "Fetch the Post"}
        </button>
    </div>
  )
}
