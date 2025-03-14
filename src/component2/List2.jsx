import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../pages/ContextApi'
import axios from 'axios';

function List2() {
    const {todo2, setTodo2} = useContext(Mycontext);

    // 카테고리 제목이 이미 표시되었는지 여부를 추적
    const [displayed, setDisplayed] = useState({
        study: false,
        hobby: false,
        etc: false,
    });

    function check(id, done){
        // done 값을 반전시켜서 서버로 전송
        // 이 코드를 추가하지 않으면 체크박스 클릭 전 데이터가 전송되어 화면에 변화가 X
        const updatedDone = !done;

        axios.put('http://localhost:3000/todo', {"id":id, "done":updatedDone})
        .then(res=>{
            setTodo2(res.data);
        })
    }

    function del(id){
        // 경로와 id값 서버로 보내주며 서버에 데이터 요청.
        axios.delete('http://localhost:3000/todo/delete', {
            data: {
                id: id
            }
        })
        // axios.delete(`http://localhost:3000/todo/delete?id=${id}`)
        // 서버로부터 데이터 받기.
        .then(res=>{
            setTodo2(res.data)
        })
    }

    const dotColor = (label) => {
        if (label === 'study') {
            return 'rgb(96, 147, 255)';
        } else if (label === 'hobby') {
            return 'pink';
        } else if (label === 'etc')
            return 'black';
    }

    // todo2를 label별로 구분하여 출력
    const groupedTodos = todo2.reduce((groups, todo) => {
        if (!groups[todo.label]) {
            groups[todo.label] = [];
        }
        groups[todo.label].push(todo);
        return groups;
    }, {});

    return (
            <ul className="list2">
                {
                    todo2.map((item, i)=>
                        <li key={i} className={item.done ? 'done' : ''}>
                            <div className='flex'>
                                <div>
                                    <div className="circle"
                                         style={{backgroundColor: dotColor(item.label)}}>
                                        </div>
                                    <span>{item.todo}</span>
                                </div>
                                <input type="checkbox" checked={item.done}
                                       onChange={()=>check(item.id, item.done)}
                                />
                                
                            </div>
                            <button onClick={()=>del(item.id)}> Delete </button>
                        </li>
                    )
                }
            </ul>
    )
}

export default List2