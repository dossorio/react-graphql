import React, { Component } from 'react';
import PostElem from "./post-elem";

class PostList extends Component {
    constructor() {
        super();

        this.state = {
            posts: [
                { title: 'A great post', author: { name: 'Someone' } },
                { title: 'This is a post', author: { name: 'Dan O.' }},
                { title: 'Really important post', author: { name: 'Brilliant Author' }}
            ]
        };
    }
s
    render() {
        return (
            <ul className={'post-list'}>
                {this.state.posts.map((post, key) => <PostElem key={key} {...post} />)}
            </ul>

        );
    }
}

export default PostList;