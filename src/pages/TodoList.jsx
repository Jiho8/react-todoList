import React, { useContext } from 'react'
import Insert from '../component/Insert'
import List from '../component/List'
import { Mycontext } from './ContextApi'

import "../style.scss";

function TodoList() {
    const {todo} = useContext(Mycontext);
  return (
    <div className='todolist'>
        <h2>TodoList</h2>
        <p> 총 {todo.length} 개 <br />
            해야할 일! {todo.filter((item)=>item.done!=true).length} 개 <br />
            해낸 일! {todo.filter((item)=>item.done==true).length} 개
        </p>

        <Insert />
        <List />
    </div>
  )
}

export default TodoList