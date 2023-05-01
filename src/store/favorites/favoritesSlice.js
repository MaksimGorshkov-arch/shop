import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    isFavoritesLoading: false,
}
const favorites = createSlice({
    name: 'favoriteSlice',
    initialState,
    reducers:{
        setFavorites(state,action){
            const id = action.payload
            state.favorites.includes(id) ? state.favorites = state.favorites.filter(el => el != id) : state.favorites = [...state.favorites,id]
            console.log(id)
        },
        removeFavorites(state,action){
            const id = action.payload
            state.favorites = state.favorites.filter(el => el !== id)
        }
    }
})
export const {setFavorites,removeFavorites} = favorites.actions
export default favorites.reducer