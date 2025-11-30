import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: 'recipe',
    initialState: {
        ingredients: "",
        generatedRecipes: null
    },
    reducers: {
        addIngredients: (state, action)=>{
            state.ingredients = action.payload
        },
        addGeneratedRecipes: (state, action)=>{
            state.generatedRecipes = action.payload
        }
    }
})

export const {addIngredients, addGeneratedRecipes} = recipeSlice.actions
export default recipeSlice.reducer