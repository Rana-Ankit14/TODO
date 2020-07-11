import React,{useState} from "react";
import {Todo} from "./Todo"
export const Home = ()=>{
    const [todos,setTodos] = useState([
        {
            text: 'First task',
            status: false
        },
        {
            text: 'Second task',
            status: false
        },
        {
            text: 'Third task',
            status: false
        },
    ])
    return(
        <div>

            {todos.map((todo)=>{
                return (<Todo todo={todo}/>)
            })}
        </div>
    );
}