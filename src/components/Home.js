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
        console.log(text);
        const NewTodos = [...todos,{text}];
        setTodos(NewTodos);
    }
    const completeTodo =(index) =>{
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const deleteTodo = index =>{
        const newTodos=[...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    };

    return(
        <div>

            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
            <TodoForm  addTodo={addTodo}/>
        </div>
    );
}