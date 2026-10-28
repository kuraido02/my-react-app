import Card from "./Card";

function Pokemon(props){
    return(
        <div className="profile-row">
            <Card /> {}
            <div className="pokemon">
                <p>Name: Gengar</p>
                <p>Level: 99</p>
                <p>Pokémon: Yes</p>
            </div>
        </div>
    );
}

export default Pokemon