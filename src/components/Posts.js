import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

class Posts extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    return <h1>Length : {this.props.posts && this.props.posts.length}</h1>;
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

const action = {
  fetchPosts
};
export default connect(
  mapStateToProps,
  null
)(Posts);
