// import {createContext, useContext} from 'react'
// const Mycontext = createContext();
// // 부모: MyContext, 자식 컴포넌트: Text()
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import HOME from './pages/HOME';
import ContextApi from './pages/ContextApi';
import Slide from './pages/Swiper';
import TodoList from './pages/TodoList';
import TodoList2 from './pages/TodoList2';

import './style.scss'

function App() {

  return (
      // <Mycontext.Provider value={ {data: 'hello'} }>
      //   <Text> 컴포넌트에 태그처럼 내용을 입력해볼게요 </Text>
      // </Mycontext.Provider>
      <Router>
        <header>
          <NavLink to='/Home'>HOME</NavLink>
          <NavLink to='/Swiper'>Swiper</NavLink>
          <NavLink to='/Todo'>Todo</NavLink>
          <NavLink to='/Todo2'>Todo 2</NavLink>
        </header>

        <ContextApi>
          <main>
            <Routes>
              <Route path='/Home' element={<HOME/>}/>
              <Route path='/Swiper' element={<Slide/>}/>
              <Route path='/Todo' element={<TodoList/>}/>
              <Route path='/Todo2' element={<TodoList2/>}/>
            </Routes>
          </main>
        </ContextApi>
      </Router>
  );
}


// function Text({children}){
//   console.log(children);
//   // props = {children: '컴포넌트에 태그처럼 내용을 입력해볼게요'}

//   const {data} = useContext(Mycontext);
//   // console.log(data);
  
//   return(
//     <> content,,, </>
//   );
// }

export default App;
