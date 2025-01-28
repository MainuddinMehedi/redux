import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarkedPosts: [],
    count: 0,
}

const bookmarksSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        bookmarkPost: (state, action) => {
            state.bookmarkedPosts.push(action.payload)
            state.count++

            // console.log(state.count, state.bookmarkedPosts)
        }
    }
})

export default bookmarksSlice.reducer

export const { bookmarkPost } = bookmarksSlice.actions