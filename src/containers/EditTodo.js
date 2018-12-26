import React from "react"
import { connect} from "react-redux"
import { CNFormInput } from "../components/common"
import { editTodoComplete } from "../actions"

const EditTodo = ({ id, dispatch }) => (
    <CNFormInput
        submit={(text) => dispatch(editTodoComplete(id,text))}
    />
);

export default connect()(EditTodo);
