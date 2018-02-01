import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    propTypes = {
        key: PropTypes.string.required,
        desc: PropTypes.number.required
    };

    render() {
        return (
            <li className={'post-list__post'} key={this.props.key}>{this.props.desc}</li>
        );
    }
}

export default Todo;