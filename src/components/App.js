import React, { Component } from 'react';
import AddTodo from "../containers/AddTodo"
import TodoListContainer from "../containers/TodoListContainer"

class App extends Component {
    render() {
        return (
            <div className="App">
                <AddTodo />
                <TodoListContainer />
            </div>
        );
    }
}

export default App;
