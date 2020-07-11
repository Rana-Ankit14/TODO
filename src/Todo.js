import React from "react";

export const Todo = (props) =>{
    return(
        <div className="list">
            {props.todo.text}
            {console.log(props.index)}
        </div>
    )
}