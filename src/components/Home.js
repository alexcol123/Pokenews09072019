import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import axios from 'axios';    THIS WAS USED FOR THE JASON PLACEHOLDER EXAMPLE

export class Home extends Component {
  //THIS WAS USED FOR THE JASON PLACEHOLDER EXAMPLE
  // state = {
  //   posts: []
  // };

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
  //     this.setState({ posts: res.data.slice(0, 10) });
  //   });
  // }

  render() {
    console.log(this.props.posts);
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map(post => (
        <div key={post.id} className="post card">
          <div className="card-content">
            <Link to={`/${post.id}`}>
              {' '}
              <span className="card-title center red-text">
                <b> {post.title.toUpperCase()}</b>
              </span>
            </Link>
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

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
