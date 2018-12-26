import { ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    EDIT_TODO_START,
    EDIT_TODO_DONE,
    VisibilityFilters
} from "../actions"

// const visibilityFilter = (state= VisibilityFilters.SHOW_ALL, action) => {

// }

const todos = (state=[], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    isEditing: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id
                ? { ...todo, completed: !todo.completed }
                : todo);
        case DELETE_TODO:
                return state.filter(todo => todo.id !== action.id);
        case EDIT_TODO_START:
                return state.map(todo => todo.id === action.id
                    ? { ...todo, isEditing: true }
                    : todo);
        case EDIT_TODO_DONE:
            return state.map(todo => todo.id === action.id
                ? { ...todo, isEditing: false, text: action.text }
                : todo);
        default:
            return state
    }
    console.log(state);
}

//visibility
//todos: add,reorder,delete

export default todos;