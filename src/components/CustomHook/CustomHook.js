import React, { useState } from 'react'

export default function CustomHook({ initalState }) {

    const [data, setData] = useState({
        initalState,
        result: []
    })

    const mostExpensive = () => {
        const sorted = data.initalState.sort((a, b) => a.price - b.price).pop() //objenctn e mejy amenamec priceov apranq
        setData({...data, result: [sorted]})
    }
    const totalPrice = () => {
        let total = 0;

        data.initalState.forEach(element => {
            total += element.amount * element.price
        });
        setData({
            ...data, result: [total]
        })
    }
  return [data, {mostExpensive, totalPrice}]
}

