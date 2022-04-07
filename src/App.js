import "./App.css";
import { useState, useEffect, useContext } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoContext } from "./components/Context";

const App = () => {
  // const [todos, setTodos] = useState([])
  const [filtered, setFiltered] = useState("All");
  const [completed, setCompleted] = useState([]);
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    // getFromLocal()
  }, []);

  useEffect(() => {
    completedHandler();
    setToLocal()
  }, [todos, filtered]);

  const completedHandler = () => {
    switch (filtered) {
      case "Completed": {
        setCompleted(todos.filter((todo) =>  todo.completed === true));
      }
      break;
      case "Uncompleted": {
        setCompleted(todos.filter((todo) => todo.completed === false));
      }
      break;
      default:
        setCompleted(todos);
    }
  };

  const setToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // console.log(completed)
  // const getFromLocal = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todoLocal);
  //     console.log(localStorage.getItem("todos"))
  //   }
  // };

  return (
    <div className="app">
      <header>
        <h5>Todo List</h5>
      </header>
      <Form setFiltered={setFiltered} setTodos={setTodos} todos={todos} />
      <TodoList completed={completed} />
    </div>
  );
};

export default App;
