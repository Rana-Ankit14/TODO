import React from "react";

export const Todo = ({todo, index, completeTodo,deleteTodo}) => {
    return (
        <div className="list">
            <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
                {todo.text}
                <div>
                    <button onClick={() => {completeTodo(index)}}>Completed</button>
                    <button onClick={()=>{deleteTodo(index)}}>X</button>
                </div>
            </div>

        </div>
    )
}