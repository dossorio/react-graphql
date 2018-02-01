import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostElem extends Component {
    propTypes = {
        key: PropTypes.string.required,
        title: PropTypes.string.required,
        author: PropTypes.object.required
    };

    render() {
        return (
            <li className={'post-list__elem'} key={this.props.key}>{this.props.title}, by <i>{this.props.author.name}</i></li>
        );
    }
}

export default PostElem;