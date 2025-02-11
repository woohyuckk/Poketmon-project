import { useDispatch, useSelector } from "react-redux"
import { addMyPokemon, removeMyPokemon } from "../store/myPokemonSlice";
import pokemonList from '../utils/mokdata'
import { Slide, toast } from "react-toastify";

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

const MAX_POKEMON = 6;

// Custom Hook - 포켓몬 추가, 제거 handler

const useMypokemon = () => {
  const dispatch = useDispatch();
  const { myPokemon } = useSelector((state) => state.myPokemon)

  const addPokemon = (pokemonId) => {
    const hasPokemon = myPokemon.some((pokemon) => pokemon.id === pokemonId);
    const newPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);
    // 검증 로직
    if (hasPokemon) {
      toast("🦄 이미 선택된 포켓몬입니다.", toastOption);
      return;
    }
    if (myPokemon.length === MAX_POKEMON) {
      toast("❌ 포켓몬은 6마리까지 소유 가능합니다", toastOption);
      return;
    }
    dispatch(addMyPokemon(newPokemon));
    toast(`✅ ${newPokemon.korean_name} 추가됨!`, toastOption);
  };

  const removePokemon = (pokemonId) => {
    dispatch(removeMyPokemon(pokemonId))
    toast("✅ 포켓몬이 제거되었습니다.", toastOption);
  }

  return { addPokemon, removePokemon }
}

export default useMypokemon
