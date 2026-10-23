

function Pokemon(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Pokemon: {props.isPokemon ? "Yes" : "No"}</p>
        </div>
    );
}

export default Pokemon