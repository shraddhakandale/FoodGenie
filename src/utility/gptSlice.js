import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptkey',
    initialState: {
        userKey: null,
        loading: false,
        cache: {}
    },
    reducers: {
        addGptKey : (state, action)=>{
            state.userKey = action.payload;
        },

        setLoadingState: (state, action)=>{
            state.loading = !state.loading
        },

        addToCache: (state, action)=>{
            const {query, suggestions} = action.payload
            state.cache[query] = suggestions
        }
    }
})

export const {addGptKey, setLoadingState, addToCache} = gptSlice.actions
export default gptSlice.reducer