import React, { useContext, useState } from 'react'
import { Mycontext } from '../pages/ContextApi'
import axios from 'axios'

function Insert2() {
    const {todo2, setTodo2} = useContext(Mycontext);
    const [label, setLabel] = useState('study');

    function save(e){
        e.preventDefault();
        const d = {
            id: Date.now(),
            todo: e.target.todo2.value,
            done: false,
            label: label
        }

        //axios.post(`${process.env.REACT_APP_APIURL}/todo/insert`, d)
        axios({
            url:`${process.env.REACT_APP_APIURL}/todo/insert`,
            method:"post",
            data:JSON.stringify(d),
            headers:{"Content-Type": "application/json"}
        })
        .then( res => {
            setTodo2(res.data)
        })

        // e.target.reset();
    }

    return (
        <div className="insert2">
            <form onSubmit={save}>
                <select name="label" id="label" value={label}
                        onChange={(e)=>setLabel(e.target.value)}>
                    <option value="hobby">Hobby</option>
                    <option value="study">Study</option>
                    <option value="etc">Etc..</option>
                </select>
                <input type="text" name='todo2'/>
                <button>Add</button>
            </form>
        </div>    
    )
}

export default Insert2