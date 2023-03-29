import React from 'react'

import './Modal.scss'

export default function Modal({ setIsOpen }) {
  return (
    <div className='Modal'>
        <div className='Modal-Content'>
            <h1>Modal Title</h1>
            <p>Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, wh
            en an unknown printer took a galley of type and scrambl
            ed it to make a type specimen book.</p>
            <hr/>
            <p>It has surviv ed not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. </p>

            <span onClick={() => {
              setIsOpen(false)
              localStorage.getItem('modal', false)
            }} 
            role='button'>X</span>
        </div>

    </div>
  )
}
