import React,{useState} from "react";
import {Todo} from "./Todo";
import {TodoForm} from "./TodoForm";


export const Home = ()=>{
    const [todos,setTodos] = useState([
        {
            text: 'First task',
            isCompleted: false
        },
        {
            text: 'Second task',
            isCompleted: false
        },
        {
            text: 'Third task',
            isCompleted: false
        },
    ])

    const addTodo = text =>{
        const NewTodos = [...todos,{text}];
        setTodos(NewTodos);
    }

    return(
        <div>

            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                />
            ))}
            <TodoForm  addTodo={addTodo}/>
        </div>
    );
}