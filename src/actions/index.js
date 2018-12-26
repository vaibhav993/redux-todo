export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const EDIT_TODO_START = "EDIT_TODO_START"
export const EDIT_TODO_DONE = "EDIT_TODO_DONE"
let nextTodo = 0;

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: ++nextTodo,
    text
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const startEditingTodo = (id) => ({
    type: EDIT_TODO_START,
    id
});

export const editTodoComplete = (id, text) => ({
    type: EDIT_TODO_DONE,
    id,
    text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});


