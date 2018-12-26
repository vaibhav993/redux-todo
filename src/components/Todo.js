import React from "react"
import EditTodo from "../containers/EditTodo"

const Todo = ({ id, text, completed, isEditing, onClick, onEditing, onDelete }) => (
    isEditing
        ? (
            <EditTodo
                id= {id}
            />
        ) : (
            <div>
                <li
                    onClick={onClick}
                    style={{
                        textDecoration: completed
                            ? "line-through"
                            : "none"
                    }}
                >{text}</li>
                <button
                    onClick={onEditing}
                >EDIT</button>
                <button
                    onClick={onDelete}
                >DELETE</button>
            </div>
        )
)

export default Todo;