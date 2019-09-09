import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }

  render() {
    const { posts } = this.state;

    const postList = posts.length ? (
      posts.map(post => (
        <div key={post.id} className="post card">
          <div className="card-content">
            <span className="card-title center red-text">
              <b> {post.title.toUpperCase()}</b>
            </span>
            <p>{post.body}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="center">No Posts Yet!</div>
    );

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
