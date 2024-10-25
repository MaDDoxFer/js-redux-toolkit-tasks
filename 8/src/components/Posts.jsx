import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post.jsx';
import { selectors as postSelectors } from '../slices/postsSlice.js'; // Import post selectors

const Posts = () => {
  const posts = useSelector(postSelectors.selectAll); // Get all posts

  return (
    <div className="mt-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
