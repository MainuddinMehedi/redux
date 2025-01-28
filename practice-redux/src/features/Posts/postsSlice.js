import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
    posts: [],
    addedPosts: [
        {
            id: 1,
            postTitle: 'Hi',
            postBody: 'hi is not something you say to me!',
            date: sub(new Date(), { minutes: 10 }).toISOString(),
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
        },
        {
            id: 2,
            postTitle: 'H00!',
            postBody: 'Now, you can say HOO to me!',
            date: sub(new Date(), { minutes: 5 }).toISOString(),
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
        },
    ],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://dummyjson.com/posts')
    const posts = response.json();
    return posts;
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
    reducers: {
        addPost: {
            reducer(state, action) {
                state.addedPosts.push(action.payload)
            },
            prepare(postTitle, postBody, author) {
                return {
                    payload: {
                        id: nanoid(),
                        postTitle,
                        postBody,
                        date: new Date().toISOString(),
                        author,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    }
                }
            }
        },
        addReaction(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.addedPosts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})


export const allPosts = (state) => state.posts

export default postsSlice.reducer;

export const { addPost, addReaction } = postsSlice.actions