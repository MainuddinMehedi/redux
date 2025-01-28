import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    usersPosts: [
        {
            id: 1,
            postTitle: 'This is a dummy post for always to show up',
            author: 'Donky',
            postBody: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
        },
    ],
}

const usersPostsSlice = createSlice({
    name: 'usersPosts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.usersPosts.push(action.payload)
            },
            prepare(postTitle, author, postBody) {
                return {
                    payload: {
                        id: nanoid(),
                        postTitle,
                        author,
                        postBody,
                    }
                }
            }
        }
    }
})


export default usersPostsSlice.reducer

export const { addPost } = usersPostsSlice.actions