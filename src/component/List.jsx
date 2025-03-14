import React, { useContext } from 'react'
import { Mycontext } from '../pages/ContextApi'

function List() {
    const {todo, setTodo} = useContext(Mycontext);

    function checkState(id){
        // 무언가 찾을 때(Array): todo.filter((item)=> item.id == id)
        let a = todo.map((item) =>{
            if(item.id == id){
                item.done = !item.done;
            }
            return item;
        })
        setTodo(a);

    }

    function del(id){
        const a = todo.filter((item) => item.id != id);
        setTodo(a);
    }

    return (
        <ul className='list'>
            {
                todo.map((item, i)=>
                    <li key={i} className={item.done ? 'done' : ''}>
                        <input type="checkbox"
                        // defaultChecked={item.done}
                        checked={item.done}
                        // onChange event에는 함수 형태가 와야 하는데 매개변수 사용으로 형태가 깨졌으므로 '()=>' 추가
                        onChange={()=>checkState(item.id)}
                        />
                        {item.todo}
                        <button onClick={()=>del(item.id)}> Delete </button>
                    </li>
                )
            }
        </ul>
    )
}

export default List