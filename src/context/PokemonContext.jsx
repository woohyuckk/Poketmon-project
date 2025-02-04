import { createContext, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import pokemonList  from "../utils/mokdata"


export const PokemonContext = createContext(null);


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

const PokemonProvider = ({ children }) => {
  const [myPokemon, setMyPokemon] = useState(
    JSON.parse(localStorage.getItem("myPokemon")) || []
  );

  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  const addMyPokemon = (pokemonId) => {
    const hasPokemon = myPokemon.some((pokemon) => pokemon.id === pokemonId);

    if (hasPokemon) {
      toast("🦄 이미 선택된 포켓몬입니다.", toastOption);
      return;
    }

    if (myPokemon.length === 6) {
      toast("❌ 포켓몬은 6마리까지 소유 가능합니다", toastOption);
      return;
    }

    setMyPokemon((prev) => {
      const newMyPokemon = pokemonList.find(
        (pokemon) => pokemon.id === pokemonId
      );

      return [...prev, newMyPokemon];
    });
  };

  return (
    <PokemonContext.Provider value={{ myPokemon, setMyPokemon, addMyPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
