import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    blogId: null,
    blogName: null,
  },
  reducers: {
    setBlogId: (state, action) => {
      state.app += action.payload;
    },
  },
});

export const { setBlogId } = appSlice.actions;

export const selectBlogId = state => state.app.blogId;
export const selectBlogName = state => state.app.blogName;

export default appSlice.reducer;