
import { useState } from "react";
import style from "./Todo.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo(){

    const [todos,setTodos]=useState([
        {
            id: 1,
            title: "DEFAULT",
            description: "DETAILS",
            status: false,
        }
    ])
    
    const handleSubmit = ({ title, description }) => {
        const payload = {
          id: todos.length+1,
          title,
          description,
          status: false
        };
        setTodos([...todos, payload]);
      };

    
    return (
        <div className={style.todo}>
            <h1>TODO LIST USING FORM</h1>
            <TodoInput onSubmit={handleSubmit} />
            <TodoList data={todos.filter((item) => !item.status)} />
        </div>
    )
}
