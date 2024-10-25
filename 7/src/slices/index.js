import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

const rootReducer = {
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
