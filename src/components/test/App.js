import React, { useReducer } from 'react'

export default function App() {
    const initalValue = {
        value: 1
    }
    const valueReducer = (state, action) => {
        console.log(state, 'state');
        switch(action.type) {
            case 'VALUE_PLUS':
                return {
                    value: action.payload
                }                
                default: return state
        }
    }

    const [state, dispatch] = useReducer(valueReducer, initalValue)

    const handelePlus = () => {
        dispatch({ type:'VALUE_PLUS', payload: state.value + 1 })
    }
    const handeleNull = () => {
        dispatch({ type:'VALUE_PLUS', payload: 0 })
    }
    const handeleMinus = () => {
        dispatch({ type:'VALUE_PLUS', payload: state.value - 1 })
    }
    const handelePluS = () => {
        dispatch({ type:'VALUE_PLUS', payload: state.value + 10 })
    }
  return (
    <div>
        <h1>{state.value}</h1>
        <button onClick={handelePlus}>+1</button>
        <button onClick={handeleNull}>0</button>
        <button onClick={handeleMinus}>-1</button>
        <button onClick={handelePluS}>+10</button>
    </div>
  )
}
