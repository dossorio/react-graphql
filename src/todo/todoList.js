import React, { Component } from 'react';
import Todo from "./todo";

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                new Todo('This is something that needs to be done'),
                new Todo('Another thing'),
                new Todo('Really important stuff')
            ]
        };
    }

    render() {
        return (
            <ul>
                {this.state.todos.map(todo => todo)}
            </ul>
        );
    }
}

export default TodoList;