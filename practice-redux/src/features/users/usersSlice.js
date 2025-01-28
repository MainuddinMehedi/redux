import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '0', name: 'Dublin' },
    { id: '1', name: 'moli' },
    { id: '2', name: 'kuber' },
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})


export const allUsers = (state) => state.users;

export default usersSlice.reducer

