import {createContext, useState} from 'react'
import { typePoke } from "../interfaces/types";
import axios from 'axios';


interface ContextProp{
    types: typePoke[];
    filterSelected: typePoke;
    pokemonsFiltered: string[] | null;
    changeTypeSelected: (type: typePoke) => void;
}

export const PokemonContext = createContext<ContextProp>({} as ContextProp);

export default function PokemonProvider({children}:any) {
    let allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=1000 0&offset=0";

    const defaultState: typePoke = {
        name: "All",
        url: allPokemonsUrl,
    };

    const [allPokemons,setAllPokemons] = useState(null);
    const [pokemonsFiltered, setpokemonsFiltered] = useState(null)

    const [types, setTypes] = useState([defaultState])
    const [filterSelected, setFilterSelected] = useState(defaultState)

    const changeTypeSelected = () => {}

    const getAllPokemons = async () =>{
        const { data } = await axios.get(allPokemonsUrl)
    }

  return (
    <PokemonContext.Provider>
        {children}

    </PokemonContext.PokemonContext.Provider>
  )
}
