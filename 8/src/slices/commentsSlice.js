import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  removeComment: commentsAdapter.removeOne, // Удаление отдельного комментария
  removeCommentsByPostId: (state, action) => {
    const { postId } = action.payload;
    const commentIds = Object.values(state.entities)
      .filter(comment => comment.postId === postId)
      .map(comment => comment.id);
    commentsAdapter.removeMany(commentIds, state); // Удаление комментариев поста
  },
  // END
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;