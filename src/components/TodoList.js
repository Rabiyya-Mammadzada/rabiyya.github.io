
import Todo from './Todo'

const TodoList = ({ todos, setTodos, completed }) => {



    return (
        <div className="todo-container">
            <ul className='todo-list'>
                {completed.map((todo) => (
                    <Todo 
                    todos={todos} 
                    key={todo.id} 
                    title={todo.title} 
                    setTodos={setTodos} 
                    todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;