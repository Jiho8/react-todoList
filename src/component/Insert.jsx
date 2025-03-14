import React, { useContext } from 'react'
import { Mycontext } from '../pages/ContextApi'

function Insert() {
    const {todo, setTodo} = useContext(Mycontext);

    function save(e){
        e.preventDefault();
        const d = {
            id: Date.now(),
            todo: e.target.todo.value,
            done: false
        }
        setTodo([...todo, d])

        e.target.reset();
    }
    
    return (
        <div className='insert'>
            <form onSubmit={save}>
                <input type="text" name="todo"/>
                <button> Add </button>
            </form>
        </div>
    )
}

export default Insert