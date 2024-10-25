// postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      const posts = action.payload;
      posts.forEach((post) => {
        state.ids.push(post.id); // Добавляем ID поста
        state.entities[post.id] = post; // Сохраняем пост
      });
    },
  },
});

export const { setPosts } = postsSlice.actions; // Экспортируем действия
export default postsSlice.reducer;
