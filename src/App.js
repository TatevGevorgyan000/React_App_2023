import React, { useEffect, useState } from 'react'
// import Component from "./components/Component";
import axios from 'axios';

import './App.css'
import Users from './components/User/Users';
import TabelLoaders from './components/Loaders/TabelLoaders';

function App() {

  const [loading, setLoading] = useState(true)
  const [arr, setArr] = useState([]);

  const handeleDelete = (id) => {
    const f = arr.filter(user => user.id !== id)
    setArr(f)
  }

  const getData = () => {
    setLoading(true)
      axios.get('https://reqres.in/api/users')
      .then(respons => setArr(respons.data.data))
      .catch(error => console.log(error))  
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
    },3000)
  },[])

  // const handeleDelet = () => {
  //   const f = arr.filter(post => post.id !== 2)
  //   setArr(f)
  // }

  // const [isShow, setisShow] = useState(true)
  // const [data, setData] = useState({
  //   firstName: "Alisa",
  //   lastName: "Smith",
  //   age: 25
  // })
  return (
    <>
      {/* {isShow ? <Component obj={data} /> : null}
      <button onClick={() => setisShow(!isShow)} className={isShow ? "hidden" : "show"}>
        {
          isShow ? "hidden" : "show"
        }
      </button> */}

      {/* {
      arr.length 
      ? <pre>{JSON.stringify(arr,null,1)}</pre>  
      : <h1>push the button to get data</h1> 
      }

    <button onClick={handeleDelet}> delete </button> */}

    {loading ? <TabelLoaders /> : <Users arr={arr} handeleDelete={handeleDelete}/>}
    </>
  );
}
export default App;
