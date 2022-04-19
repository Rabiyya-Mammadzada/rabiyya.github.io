import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { TodoContext } from "./Context";

const Form = ({ setFiltered, setRemoveAll }) => {
    const [inputText, setInputtext] = useState("");

    const { setTodos } = useContext(TodoContext)

    const inputHandler = (e) => {
        setInputtext(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // setTodos([
        //     ...todos,
        //     { title: inputText, completed: false, id: Math.random() },
        // ]);
        if (inputText.trim().length === 0) {
            alert("Please fill the input")
        } else {
            setTodos(inputText)
        }
        setInputtext("");
    };

    const statusHandler = (e) => {
        setFiltered(e.target.value);
    };

    const removeAll = () => {
        setRemoveAll()
    }

    return (
        <div>
            <form action="">
                <div className="search-input">
                    <input
                        type="text"
                        className="todo-input"
                        onChange={inputHandler}
                        value={inputText}
                    />
                    <button className="todo-button" type="submit" onClick={submitHandler}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="select">
                    <select
                        name=""
                        id=""
                        className="filter-todo"
                        onChange={statusHandler}
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Uncompleted">Uncompleted</option>
                    </select>
                </div>
                <div className="remove-btn">
                    <button onClick={removeAll}>Remove all</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
