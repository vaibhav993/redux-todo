import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
    return (
        <ul>
            {
                todos.map((todo) => (
                    <Todo
                        key= {todo.id}
                        {...todo}
                        onClick={() => toggleTodo(todo.id)}
                        onEditing={() => editTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))
            }
        </ul>
    )
}

export default TodoList;