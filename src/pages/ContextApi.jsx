import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const Mycontext = createContext();

const imgs = [
    './imgs/img-bbq-01.jpg',
    './imgs/img-bbq-02.jpg',
    './imgs/img-bbq-03.jpg'
]

function ContextApi({children}) {
    const [data, setData] = useState(imgs);
    const [todo, setTodo] = useState([]);
    const [todo2, setTodo2] = useState([]);
    const value = {
        data, setData,
        todo, setTodo,
        todo2, setTodo2
    }

    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_APIURL}/todo`)
      .then(res=>{
          setTodo2(res.data)
      })
    },[])
    
  return (
    <Mycontext.Provider value={value}> 
        {children} 
    </Mycontext.Provider>
  )
}

export default ContextApi