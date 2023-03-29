import React, { useState } from 'react'

import './App.scss'
import { validation } from './helpers/validation'

export default function App() {
  const [val, setVal] = useState({
    value: '',
    errorMessage: "Invalid Parameter",
    isValid: true,
    validatde: {
      minLength: 8,
      noNumber: true,
      stratWithUpperCase: true,
      required: true,
    }
  })


   const handeleChange = (e) => {

    const isValid = validation(e.target.value, val.validatde) // validation functiony import e arvel 

    if(isValid) {
      setVal({...val, value: e.target.value, isValid: true})
    }else{
      setVal({...val, value: e.target.value, isValid: false})
    }
   }
  return (
    <form className='Form'>
        <div className='Form-Group'>
            <input 
            type='text' 
            value={val.value}
            onChange={handeleChange} />
            {!val.isValid && <p id='error'>{val.errorMessage}</p>}
        </div>
    </form>
  )
}
