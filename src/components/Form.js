
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { TodoProvider, TodoContext } from './Context'

const Form = ({ setStatus }) => {


    const [inputText, setInputtext] = useState("")

    const inputHandler = (e) => {
        setInputtext(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, { title: inputText, completed: false, id: Math.random()}])
        setInputtext("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const [todos, setTodos] = useContext(TodoContext)

    return (
        <div>
            <form action="" >
                <div className='search-input'>
                    <input type="text" className="todo-input" onChange={inputHandler} value={inputText} />
                    <button className="todo-button" type="submit" onClick={submitHandler} >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="select">
                    <select name="" id="" className="filter-todo" onChange={statusHandler}>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;