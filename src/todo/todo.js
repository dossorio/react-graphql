import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    propTypes = {
        desc: PropTypes.string.required
    };

    render() {
        return (
            <li>{this.props.desc}</li>
        );
    }
}

export default Todo;