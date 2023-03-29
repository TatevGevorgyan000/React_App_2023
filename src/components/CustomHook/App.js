import React from 'react'
import CustomHook from './CustomHook'

const initalState = [
    {
        id:1,
        name: '🍔',
        price: 30,
        amount: 10,
        category: 'fast food'
    },
    {
        id:2,
        name: '🍨',
        price: 20,
        amount: 3,
        category: 'sweet'
    },
    {
        id:3,
        name: '🍿',
        price: 10,
        amount: 5,
        category: 'snack'
    },
    {
        id:4,
        name: '🍵',
        price: 5,
        amount: 9,
        category: 'soup'
    },
]
export default function App() {
    const [data, {mostExpensive, totalPrice}] = CustomHook({initalState})
  return (
    <div>
        <pre>{JSON.stringify(data, null, 1)}</pre>
        <button onClick={mostExpensive}>get most Expensive product</button>
        <button onClick={totalPrice}>get total</button>
        <pre>{JSON.stringify(data.result, null, 1)}</pre>
    </div>
  )
}
