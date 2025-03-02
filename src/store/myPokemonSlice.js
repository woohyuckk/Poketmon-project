import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  myPokemon: JSON.parse(localStorage.getItem("myPokemon")) || [],
};

const myPokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    // myPokemon 추가
    addMyPokemon: (state, action) => {
      const newPokemon = action.payload;
      state.myPokemon.push(newPokemon);
    },
    //my Pokemon 제거 
    removeMyPokemon: (state, action) => {
      state.myPokemon = state.myPokemon.filter((pokemon) => pokemon.id !== action.payload);
    },
  },
});

export const { addMyPokemon, removeMyPokemon } = myPokemonSlice.actions;
export default myPokemonSlice.reducer;
