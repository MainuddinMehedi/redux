import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import bookmarksReducer from '../features/bookmark/bookmarksSlice';
import readingWishlistsReducer from '../features/readingWishlist/readingWishlistsSlice';
import usersPostsReducer from "../features/posts/usersPostsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        bookmarks: bookmarksReducer,
        readingWishlist: readingWishlistsReducer,
        usersPosts: usersPostsReducer,
    }
})

export default store