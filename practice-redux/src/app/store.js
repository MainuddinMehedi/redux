import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/Posts/postsSlice';
import cartCountsReducer from '../features/CartCount/cartCountsSlice';
import usersReducer from '../features/users/usersSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        cartCount: cartCountsReducer,
        users: usersReducer,
    }
})

export default store;