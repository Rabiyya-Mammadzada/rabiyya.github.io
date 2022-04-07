import { useContext } from "react";
import { TodoContext } from "./Context";
import Todo from "./Todo";

const TodoList = ({completed,todos,setTodos}) => {
//   const { completed, todos } = useContext(TodoContext);
  

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {completed.map((todo) => (
          <Todo key={todo.id} title={todo.title} todo={todo}todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
