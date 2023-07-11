import { useState } from "react";
import { Pokemon } from "../../models/Pokemon";
import { PokemonDisplay } from "./PokemonDisplay";
import axios from "axios";

export default function PokeSearch() {
    let [inputState, updateInputState] = useState('');
    let [pokemon, updatePokemonState] = useState({name:'', id: 0, sprites:['']})

    function updateState(event : any){
        updateInputState(event.target.value);
    }
    function getPokemonAPI(){
        axios.get("https://pokeapi.co/api/v2/pokemon/"+inputState)
        .then((response) => {   
            let spriteArray:string[] = [
                response.data.sprites.front_default, 
                response.data.sprites.back_default, 
                response.data.sprites.front_shiny
            ]

            let apiPokemon : Pokemon = {
                name: response.data.name, 
                id: response.data.id, 
                sprites: spriteArray
            }
            updatePokemonState(apiPokemon)
        });
    }

    return (
    <>
        <h1>Pokemon Search</h1>
        <p>{ inputState }</p>
        <input value={ inputState } onChange={ updateState }></input>
        <button onClick={ getPokemonAPI }>search</button>
        <PokemonDisplay pokemon={ pokemon }></PokemonDisplay>
    </>
    )
}