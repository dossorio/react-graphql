import React, { Component } from 'react';
import Post from "./post";

class PostList extends Component {
    constructor() {
        super();

        this.state = {
            posts: [
                'A great post',
                'This is a post',
                'Really important post'
            ]
        };
    }

    render() {
        return (
            <ul className={'post-list'}>
                {this.state.posts.map((post, key) => <Post key={key} desc={post} />)}
            </ul>

        );
    }
}

export default PostList;