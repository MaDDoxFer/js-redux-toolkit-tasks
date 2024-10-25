import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // BEGIN
    addComment: (state, action) => {
      const { comment } = action.payload;
      state.ids.push(comment.id); // Добавляем ID комментария в массив ids
      state.entities[comment.id] = comment; // Сохраняем сам комментарий в entities
    },
    setComments: (state, action) => {
      const comments = action.payload;
      comments.forEach((comment) => {
        state.ids.push(comment.id); // Добавляем ID каждого комментария в массив ids
        state.entities[comment.id] = comment; // Сохраняем каждый комментарий в entities
      });
    },
    // END
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;
