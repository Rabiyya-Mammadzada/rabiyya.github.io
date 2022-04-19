import { createContext, useState, useReducer } from "react";
import { act } from "react-dom/test-utils";

export const TodoContext = createContext();


const initialState = ({
    todos: []
})

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_TODOS":
            return {
                todos: [
                    ...state.todos,
                    { title: action.title, completed: false, id: Math.random() },
                ]
            }
        case "REMOVE_ITEM":
            return { todos: state.todos.filter((el) => el.id !== action.id) }
        case "EDIT_ITEM":
            return {
                todos: state.todos.map((item) => {
   
                    if (item.id === action.id) {

                        return {
                            ...item,
                            title: action.title,
                        };
                    }

                    return item;
                })
            }
        case "TOGGLE_COMPLETE":
            return {
                todos:
                    state.todos.map((item) => {

                        if (item.id === action.id) {
                            return {
                                ...item,
                                completed: !item.completed,
                            };
                        }
                        return item;
                    })
            }
        case "REMOVE_ALL":
            return {
                todos: []
            }
    }
}

export const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)



    const value = {
        todos: state.todos,
        setTodos: (title) => { dispatch({ type: "SET_TODOS", title }) },
        setRemoveItem: (id) => { dispatch({ type: "REMOVE_ITEM", id }) },
        setEditedItem: (title, id) => { dispatch({ type: "EDIT_ITEM", title, id }) },
        setCompleteToggle: (id) => { dispatch({ type: "TOGGLE_COMPLETE", id }) },
        setRemoveAll: () => { dispatch({ type: "REMOVE_ALL" }) }
    }




    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
