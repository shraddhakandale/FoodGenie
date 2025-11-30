import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'popup',
    initialState: {
        isOpen: false,
        selectedRecipe: null
    },
    reducers: {
        openModal: (state, action)=>{
            state.isOpen = true
            state.selectedRecipe = action.payload
        },
        closeModal: (state, action)=>{
            state.isOpen = false
            state.selectedRecipe = null
        }
    }
})

export const {openModal, closeModal} = popUpSlice.actions
export default popUpSlice.reducer
