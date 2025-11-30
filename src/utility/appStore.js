import { configureStore } from "@reduxjs/toolkit";
import gptReducer from "./gptSlice"
import recipeReducer from "./recipeSlice"
import popupReducer from "./popUpSlice"

const appStore = configureStore({
    reducer: {
        gptkey: gptReducer,
        recipe: recipeReducer,
        popup: popupReducer
    }
})

export default appStore;