import React from "react";
import { connect } from "react-redux"
import { addTodo } from "../actions"
import { CNFormInput } from "../components/common"

const AddTodo = ({ dispatch }) => (
    <CNFormInput
        submit={(text) => dispatch(addTodo(text))}
    />
);

export default connect()(AddTodo);



