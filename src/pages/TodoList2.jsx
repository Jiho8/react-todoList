import "../style.scss"
import Insert2 from '../component2/Insert2'
import List2 from '../component2/List2'

function TodoList() {
  return (
    <div className='todolist2'>
      <h2>Todo !</h2>

      <Insert2/>
      <List2/>
    </div>
  )
}

export default TodoList