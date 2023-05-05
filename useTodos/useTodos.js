import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

 export const useTodos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos'));
    }

const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
      
            const HandleNewTodo = (todo) => {
                const action = {
                    type: '[TODO] add todo',
                    payLoad: todo
                }
                dispatch(action);
            }

            const handDeleteTodo = (id) => {
                dispatch({
                    type: '[TODO] Remove todo',
                    payLoad: id
                })
            }
            const handleToggleTodo = (id) => {
                dispatch({
                    type: '[TODO] toggle todo',
                    payLoad: id
                })
            }
       
                    return {
                        todos,
                        todosCount:todos.length,
                        pendingTodosCount:todos.filter(todo => !todo.done).length,
                        HandleNewTodo,
                        handDeleteTodo,
                        handleToggleTodo
                    }
 }
 