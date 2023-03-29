import React from 'react'

import './sass/MainForm.scss'

export default function MainForm({setInitalValue, initalValue}) {

  const handeleSubmit = (e) => {
    e.preventDefault()
    console.dir(e.target);
    const { title, desc, author, theme } = e.target;
    // console.log({ title, desc, author, theme },'111');/

    const newBlog = {
      id: Date.now().toString(), 
      title: title.value, 
      desc: desc.value, 
      author: author.value, 
      theme: theme.value, 
    }
    // console.log(newBlog,'newBlog');

    if(initalValue.length > 0) {
      setInitalValue([...initalValue, newBlog])
    }else{
      setInitalValue([newBlog])
    }
    e.target.reset()
  }

  return (
    <form 
    className='Form' 
    onSubmit={handeleSubmit}
    >
      <div className='Form-Input'>
        <label htmlFor='title'>Blog Title</label>
        <input type='text' id='title'/>
      </div>
      <div className='Form-Input'>
        <label htmlFor='desc'>Description</label>
        <textarea type='text' id='desc' cols='30' rows='10'/>
      </div>
      <div className='Form-Input'>
        <label htmlFor='author'>Author</label>
        <input type='text' id='author'/>
      </div>
      <div className='Form-Input'>
        <label htmlFor='theme'>Theme</label>
        <select id='theme'>
          <option value='' selected></option>
          <option value='biology'>biology</option>
          <option value='sport'>sport</option>
          <option value='politics'>politics</option>
          <option value='art'>art</option>
        </select>
      </div>
      <div className='Form-Input Form-Input_submit'>
        <input type='submit' value='Add Blog'/>
      </div>
    </form>
  )
}


//1 title
//2 description
//3 author  
//4 thema