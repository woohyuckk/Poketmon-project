import { createContext, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import pokemonList from "../utils/mokdata";

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

  // 포켓몬 추가 함수
  const addMyPokemon = (pokemonId) => {
    // ✅ 이미 가지고 있는 포켓몬인지 확인
    const hasPokemon = myPokemon.some((pokemon) => pokemon.id === pokemonId);
    // ✅ 존재하는 포켓몬인지 확인 후 추가
      const newPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);
      
      const MAX_POKEMON = 6;

    if (hasPokemon) {
      toast("🦄 이미 선택된 포켓몬입니다.", toastOption);
      return;
    }
    // ✅ 6마리 소유하고 있는지 확인 
    if (myPokemon.length === MAX_POKEMON) {
      toast("❌ 포켓몬은 6마리까지 소유 가능합니다", toastOption);
      return;
    }

    setMyPokemon((prev) => [...prev, newPokemon]);
    toast(`✅ ${newPokemon.korean_name} 추가됨!`, toastOption);
  };

  // ✅ 포켓몬 제거 함수
  const removeMyPokemon = (pokemonId) => {
    const hasPokemon = myPokemon.some((pokemon) => pokemon.id === pokemonId);

    if (!hasPokemon) {
      toast("⚠️ 해당 포켓몬은 소유하고 있지 않습니다.", toastOption);
      return;
    }

    setMyPokemon((prev) => prev.filter((pokemon) => pokemon.id !== pokemonId));
    toast("✅ 포켓몬이 제거되었습니다.", toastOption);
  };

  return (
    <PokemonContext.Provider
      value={{ myPokemon, addMyPokemon, removeMyPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
