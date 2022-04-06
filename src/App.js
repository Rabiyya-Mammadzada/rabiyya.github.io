import logo from './logo.svg';

import './App.css';
import { useRef, useState, useEffect, useCallback, useContext } from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoProvider, TodoContext } from './components/Context'


const App = () => {

 
  // const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [completed, setCompleted] = useState([])
  const [todos, setTodos] = useContext(TodoContext)




  useEffect(() => {
    getFromLocal()
  }, [])

  useEffect(() => {
    completedHandler()
    setToLocal()

  }, [todos, status])


  const completedHandler = () => {
    switch (status) {
      case 'Completed':
        setCompleted(
          todos.filter((todo) => todo.completed === true)
        );
        break;
      case 'Uncompleted':
        setCompleted(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setCompleted(todos)
        break;
    }
  }



  const setToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getFromLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }



  return (
    <div className='app'>
      <header>
        <h5>Todo List</h5>
      </header>
      <Form setStatus={setStatus}/>
      <TodoList completed={completed} />
    </div>

  );
};

export default App;
