import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id, // Assuming user entities have an `id` property
});
const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: usersAdapter.addMany,
  },
});

export const { actions, reducer } = usersSlice;
export const selectors = usersAdapter.getSelectors(state => state.users);
export default reducer;
