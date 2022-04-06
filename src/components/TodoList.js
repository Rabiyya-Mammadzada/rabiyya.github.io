
import { useContext } from 'react';
import { TodoContext } from './Context';
import Todo from './Todo'

const TodoList = () => {

    const {completed, todos} = useContext(TodoContext)
console.log(todos)

    return (
        <div className="todo-container">
            <ul className='todo-list'>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        title={todo.title}
                        todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;