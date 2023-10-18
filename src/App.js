import React from 'react'

import Resturant from './componant/Basics/Resturant'
import MyUseState from './componant/Hooks/MyUseState';
import UseEffect from './componant/Hooks/UseEffect';
import MyTodolist from './MyTodolist';
import Todolist from './ToDoList/Todolist';

const App = () => {
  return (
  <>
    <div>
      
      <Resturant />
    </div>
    <div>
      <MyUseState/>
      <UseEffect/>
      <Todolist/>
      <MyTodolist/>
    </div>
  </>
  )
}

export default App





