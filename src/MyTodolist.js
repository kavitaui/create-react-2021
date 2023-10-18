import React, { useState } from 'react'
import "./ToDoList/Style.css"

const MyTodolist = () => {
    const [list, setList] = useState([]);
    const [data, setData] = useState('');
    const handleAddtodo = (todo) => {
        debugger;
        if (data.trim() === '') {
            return;
        }
        const newList = {
            id: Math.random(),
            todo: data
        }
        setList([...list, newList])
        setData('');
    }
    const handleDeleteTodo = (id) => {
        debugger;
        const changeData = list.filter(item => item.id !== id)

        setList(changeData);


    }
    return (
        <div className='active'>
          < div className="my-todo">
            <div className='child-div'>< input type="text"
                value={data}
                onChange={(e) => { setData(e.target.value) }}
                placeholder="input a new task"></input>

            <button onClick={handleAddtodo}>add</button>
   

            {list.map((item) => ( 
                 
                  <div key={item.id} >{item.todo}< input type="radio"
                   onClick={() => { handleDeleteTodo(item.id) }} ></input>
                </div>
               

            )


            )}</div>
         </div>
        </div>)

}

export default MyTodolist
