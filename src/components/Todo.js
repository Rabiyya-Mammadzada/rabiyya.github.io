import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faCheck, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Todo = ({ todo, todos, setTodos, title }) => {

    const [edit, setEdit] = useState(false)
    const [editedItem, setEditeditem] = useState("")

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

    const removeHandler = () => {
        setTodos(todos.filter((el) => (el.id !== todo.id)))

    }


    const editInputHandler = () => {
        console.log(edit)
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
        console.log(e.target.value)
    }

    return (
        <div className={`todo ${todo.completed ? "completed" : " "}`}  >
            <li className='todo-item' >
                {edit ? <input type="text" onChange={editedTodo} /> : title}


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