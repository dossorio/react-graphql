import React, { Component } from 'react';
import Todo from "./todo";

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                'This is something that needs to be done',
                'Another thing',
                'Really important stuff'
            ]
        };
    }

    render() {
        return (
            <ul>
                {this.state.todos.map((todo, key) => <Todo key={key} desc={todo} />)}
            </ul>
            
        );
    }
}

export default TodoList;