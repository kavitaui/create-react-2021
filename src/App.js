import React from 'react'

import Resturant from './componant/Basics/Resturant'
import MyUseState from './componant/Hooks/MyUseState';
import UseEffect from './componant/Hooks/UseEffect';
import MyTodolist from './MyTodolist';
import Todolist from './ToDoList/Todolist';
import Temp from "./componant/Weather/Temp"

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
      <Temp/>
       
    </div>
  </>
  )
}

export default App





