import React, { Component } from 'react';
import axios from "axios";
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: "jjlj"
        }
        axios.post("https://jsonplaceholder.typicode.com/todos/1", this.state)
            .then(response => { console.log(response) })
            .catch(e => { console.log(e) });
    }
    render() {
        return (
            <div></div>
        );
    }
}
export default Post;