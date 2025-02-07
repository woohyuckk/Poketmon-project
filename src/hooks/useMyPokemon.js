import { useDispatch } from "react-redux"
import { addMyPokemon, removeMyPokemon } from "../store/myPokemonSlice";




const useMypokemon = () => {
    
    const dispatch = useDispatch();

    const addPokemon = (id) => dispatch(addMyPokemon(id));
    const removeMypokemon = (id) => dispatch(removeMyPokemon(id))
    

    return {addPokemon, removeMypokemon}
}

export default useMypokemon