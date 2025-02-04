import { createSlice } from "@reduxjs/toolkit";
import pokemonList from'../utils/mokdata'
const initialState = {
  myPokemon: JSON.parse(localStorage.getItem("myPokemon")) || [],
};

const myPokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    addMyPokemon: (state, action) => {
      const pokemonId = action.payload;
      const hasPokemon = state.myPokemon.some((pokemon) => pokemon.id === pokemonId);
      const newPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);
      const MAX_POKEMON = 6;

      if (hasPokemon) {
        alert("🦄 이미 선택된 포켓몬입니다.");
        return;
      }
      if (state.myPokemon.length === MAX_POKEMON) {
        alert("❌ 포켓몬은 6마리까지 소유 가능합니다.");
        return;
      }

      state.myPokemon.push(newPokemon);
      localStorage.setItem("myPokemon", JSON.stringify(state.myPokemon));
    },

    removeMyPokemon: (state, action) => {
      state.myPokemon = state.myPokemon.filter((pokemon) => pokemon.id !== action.payload);
      localStorage.setItem("myPokemon", JSON.stringify(state.myPokemon));
    },
  },
});

export const { addMyPokemon, removeMyPokemon } = myPokemonSlice.actions;
export default myPokemonSlice.reducer;
