import { createContext, useState, useReducer } from 'react'

const initialState = {
    todos: [],
    completed: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return { todos: [...state.todos, { title: action.title, completed: false, id: Math.random() }] }
        // case "SET_COMPLETE": {

        //     const completedList = state.todos.filter((todo) => todo.completed === action.filtered)
        //     return { completed: completedList }
        // if (state.status == 'Completed') {
        //     const completedList = state.todos.filter((todo) => todo.completed === action.filter)
        //     return { completed: completedList }
        // }
        // else if (state.status == 'Uncompleted') {
        //     const uncompletedList = state.todos.filter((todo) => todo.completed === action.filter)
        //     return { completed: uncompletedList }
        // }
        // else {
        //     return {completed: state.todos};

        // }
        // }
  
        case "REMOVE_TODO": {
            const removed = state.todos.filter((el) => (el.id !== action.id))
            return { todos:  removed }
        }
        default:
            return state
    }
}



// [...todos, { title: inputText, completed: false, id: Math.random()}]

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        todos: state.todos,
        status: state.status,
        completed: state.completed,
        setTodos: (title) => { dispatch({ type: "SET_TODOS", title }) },
        setStatus: (status) => { dispatch({ type: "SET_STATUS", status }) },
        setComplete: (id, complete) => { dispatch({ type: "TOGGLE_COMPLETE", id, complete }) },
        setRemove: (id) => { dispatch({ type: "REMOVE_TODO", id }) }

    }

    return (
        <TodoContext.Provider
            value={value}>
            {children}
        </TodoContext.Provider>
    )
}


