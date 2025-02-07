import { createSlice } from "@reduxjs/toolkit";
import pokemonList from'../utils/mokdata'
import { Slide, toast } from "react-toastify";
const initialState = {
  myPokemon: JSON.parse(localStorage.getItem("myPokemon")) || [],
};

const toastOption = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Slide,
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
        toast("🦄 이미 선택된 포켓몬입니다.", toastOption);
        return;
      }
      if (state.myPokemon.length === MAX_POKEMON) {
        toast("❌ 포켓몬은 6마리까지 소유 가능합니다", toastOption);
        return;
      }

      state.myPokemon.push(newPokemon);
      toast(`✅ ${newPokemon.korean_name} 추가됨!`, toastOption);
      localStorage.setItem("myPokemon", JSON.stringify(state.myPokemon));
    },

    removeMyPokemon: (state, action) => {
      state.myPokemon = state.myPokemon.filter((pokemon) => pokemon.id !== action.payload);
      localStorage.setItem("myPokemon", JSON.stringify(state.myPokemon));
      toast("✅ 포켓몬이 제거되었습니다.", toastOption);
    },
  },
});

export const { addMyPokemon, removeMyPokemon } = myPokemonSlice.actions;
export default myPokemonSlice.reducer;
