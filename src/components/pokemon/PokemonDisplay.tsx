import { Pokemon } from "../../models/Pokemon";

interface myProps {
    pokemon : Pokemon
}

export function PokemonDisplay(props: myProps){
    console.log(props);
    return (
    <>
        <h1>Name: { props.pokemon.name }</h1>
        <p>id: { props.pokemon.id }</p>
        { props.pokemon.sprites.map( (sprite) =>
        <img src={ sprite }/>
        )}
    </>
    )
}