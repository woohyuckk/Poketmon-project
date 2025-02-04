import { configureStore } from "@reduxjs/toolkit";
import myPokemonReducer from "./myPokemonSlice";

export const store = configureStore({
  reducer: {
    myPokemon: myPokemonReducer,
  },
});

export default store;
