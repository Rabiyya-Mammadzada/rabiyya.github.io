
import Todo from './Todo'

const TodoList = ({ completed }) => {



    return (
        <div className="todo-container">
            <ul className='todo-list'>
                {completed.map((todo) => (
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