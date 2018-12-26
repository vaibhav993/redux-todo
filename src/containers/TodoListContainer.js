import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import { toggleTodo, startEditingTodo, deleteTodo } from "../actions"

const mapStateToProps = (state) => ({
    todos: state
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    editTodo: id => dispatch(startEditingTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)