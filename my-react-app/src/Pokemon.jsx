

function Pokemon(props){
    return(
        <div className="pokemon">
            <p>Name: {props.name}</p>
            <p>Level: {props.age}</p>
            <p>Pokémon: {props.isPokemon ? "Yes" : "No"}</p>
        </div>
    );
}

export default Pokemon