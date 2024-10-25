import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"

const postsAdapter = createEntityAdapter()
let st8 = postsAdapter.getInitialState()

const postsSlice = createSlice({
  name: 'posts',
  initialState: st8,
  reducers: {
    addPost(state, action) {
      postsAdapter.addOne(state, action)
    },
    addPosts: (state, action) => { postsAdapter.addMany(state, action) },
    updatePost: (state, action) => postsAdapter.updateOne(state, action)
  }
})

export const { actions, reducer } = postsSlice
export const selectors = postsAdapter.getSelectors(s => s.posts)
export default reducer
