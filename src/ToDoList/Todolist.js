import React, { useState } from 'react';

const Todolist = () => {
    const [list, setList] = useState([]);
    const [inputTask, setInputTask] = useState(''); // You can use this state to manage input

    const handleAddTodo = () => {
        if (inputTask.trim() === '') {
            return; // Don't add empty tasks
        }

        const newTask = {
            id: Math.random(),
            todo: inputTask,
        };

        setList([...list, newTask]);
        setInputTask(''); // Clear the input field after adding a task
    };
    const handleDeleteTodo =(id)=>{
        const updatedList = list.filter(item=> item.id !==id)
setList(updatedList);
    
    }

    // Optionally, you can call handleAddTodo with initial tasks here.
    // handleAddTodo("Hello World");
    // handleAddTodo("Hello World");

    return (
        <div className='active'>
            <div>
                <input
                    type="text"
                    value={inputTask}
                    onChange={(e) => setInputTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo}>Add</button>
                <div>
                   {
                    list.map((item) => (
                        <div key={item.id}>{item.todo}
                        <button onClick={()=>{handleDeleteTodo(item.id)}}>delete</button></div>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Todolist;
