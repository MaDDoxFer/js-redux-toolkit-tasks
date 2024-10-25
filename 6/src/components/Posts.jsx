import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post.jsx';

const Posts = () => {
  const posts = useSelector((state) => state.posts.ids.map((id) => state.posts.entities[id])); // Извлекаем посты по ID

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
