import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlists: [],
    wishlistsCount: 0,
}


const readingWishlistsSlice = createSlice({
    name: 'readingWishlist',
    initialState,
    reducers: {
        addWishlist: {
            reducer(state, action) {
                const matchedPost = state.wishlists.find(item => item.id === action.payload.id)
                if (matchedPost) {
                    matchedPost.count++
                } else {
                    state.wishlists.push(action.payload);
                    state.wishlistsCount++
                }
            },
            prepare(eachPost) {
                return {
                    payload: {
                        ...eachPost,
                        count: 1,
                    }
                }
            }
        },
        incrementCount: (state, action) => {
            state.wishlists.find(item => item.id === action.payload.id).count++
        },
        decrementCount: (state, action) => {
            const matchedPost = state.wishlists.find(item => item.id === action.payload.id)
            if (matchedPost) {
                if (matchedPost.count > 1) {
                    matchedPost.count--
                } else {
                    state.wishlists = state.wishlists.filter(item => item.id !== matchedPost.id);
                    state.wishlistsCount--
                }
            }

        }
    }
})


export default readingWishlistsSlice.reducer

export const { addWishlist, incrementCount, decrementCount } = readingWishlistsSlice.actions