
import { useState } from "react";
import style from "./Todo.module.css";

function TodoInput({ onSubmit }) {
  const [formState, setFormState] = useState({
    title: "",
    description: ""
  });

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };
  return (
    <form onSubmit={onFormSubmit} className={style.todoInput}>
      <div style={{ padding: 4 }}>
        <input
          placeholder="title"
          name="title"
          value={formState.title}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ padding: 4 }}>
        <input
          placeholder="description"
          name="description"
          value={formState.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input type="submit" value="SUBMIT" className={style.submit}/>
      </div>
    </form>
  );
}

export default TodoInput;
