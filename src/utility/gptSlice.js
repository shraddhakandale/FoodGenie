import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptkey',
    initialState: {
        userKey: null,
        loading: false
    },
    reducers: {
        addGptKey : (state, action)=>{
            state.userKey = action.payload;
        },

        setLoadingState: (state, action)=>{
            state.loading = !state.loading
        }
    }
})

export const {addGptKey, setLoadingState} = gptSlice.actions
export default gptSlice.reducer