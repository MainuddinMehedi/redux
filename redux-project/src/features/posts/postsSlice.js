import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPost', async () => {
    const response = await fetch('https://dummyjson.com/posts');
    return response.json();
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    },
})


export const selectAllPosts = state => state.posts

export default postsSlice.reducer
