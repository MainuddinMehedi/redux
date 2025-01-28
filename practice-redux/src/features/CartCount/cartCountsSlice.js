import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 1,
}

const cartCountsSlice = createSlice({
    name: 'cartCount',
    initialState,
    reducers: {

    }
})


export default cartCountsSlice.reducer;

