import React from "react";

export const Todo = ({todo, index, completeTodo}) => {
    return (
        <div className="list">
            <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
                {todo.text}
                    <button onClick={() => {completeTodo(index)}}>Completed</button>
            </div>

        </div>
    )
}