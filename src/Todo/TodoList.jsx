
import style from "./Todo.module.css";

function TodoList({ data }) {
    return (
      <ul className={style.list}>
        {data.map((item) => (
          <li key={item.id} className={style.listData}>
           {item.id}. {item.title} - {item.description} - {item.status ? "DONE" : "PENDING"}
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;