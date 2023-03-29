import React, { useEffect, useState } from 'react'
import Modal from './Modal';

import './Modal.scss'

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    // const toggleModal = () => {
    //     setIsOpen(true)
    // }

    useEffect(() => {
        const open = localStorage.getItem('modal') === null
        setIsOpen(open)
    }, [])

  return (
    <div>
        {isOpen ? <Modal setIsOpen={setIsOpen}/> : null}
        {/* <button onClick={toggleModal}>Open Modal</button> */}
    </div>
  )
}
