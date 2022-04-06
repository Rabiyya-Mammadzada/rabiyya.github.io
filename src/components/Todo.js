import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faCheck, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect, useContext } from 'react'
import { TodoContext } from './Context'



const Todo = ({ todo,  title }) => {

    
    const {todos, setTodos, setComplete, setRemove} = useContext(TodoContext)
    const [edit, setEdit] = useState(false)
    const input = useRef()

 
    useEffect(() => {
        if (edit === true) {
            input.current.focus()
        }
    }, [edit]);

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
console.log(todo.id)
    const removeHandler = () => {
        setRemove(todo.id)
    }

    const editInputHandler = () => {
        setEdit(true)
    }

    const saveInputHandler = () => {
        setEdit(false)
    }

    const editedTodo = (e) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, title: e.target.value
                }
            }
            return item
        }))
    }
    

    return (
        <div className={`todo ${todo.completed ? "completed" : " "}`}  >
            <li className='todo-item' >
                {edit ? <input type="text" onChange={editedTodo} className="edit-input" ref={input} value={title} /> : title}
            </li>
            {edit ?

                <button className="save-btn" onClick={saveInputHandler}>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                </button>
                :
                <button className="edit-btn" onClick={editInputHandler}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
            }

            <button className="complete-btn" onClick={completeHandler}><FontAwesomeIcon icon={faCheck} /></button>
            <button className="trash-btn" onClick={removeHandler}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
    );
}

export default Todo;