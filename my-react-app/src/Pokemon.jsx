

function Pokemon(props){
    return(
        <div className="pokemon">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Pokemon: {props.isPokemon ? "Yes" : "No"}</p>
        </div>
    );
}

export default Pokemon