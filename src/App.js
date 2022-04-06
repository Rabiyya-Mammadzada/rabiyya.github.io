import './App.css';
import { useState, useEffect, useContext } from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodoContext } from './components/Context'


const App = () => {


  // const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  // const [completed, setCompleted] = useState([])
  const { todos, setTodos, completed } = useContext(TodoContext)




  useEffect(() => {
    // getFromLocal()
  }, [])

  useEffect(() => {
    completedHandler()
    // setToLocal()

  }, [todos, filter])


  const completedHandler = () => {
    setFilter(filter)
  }



  // const setToLocal = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }
  // const getFromLocal = () => {
  //   if (localStorage.getItem('todos') === null) {
  //     localStorage.setItem("todos", JSON.stringify([]))
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"))
  //     setTodos(todoLocal)
  //   }
  // }



  return (
    <div className='app'>
      <header>
        <h5>Todo List</h5>
      </header>
      <Form setFilter={setFilter} />
      <TodoList  />
    </div>

  );
};

export default App;
