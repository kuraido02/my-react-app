import Card from "./Card";

function Pokemon(props){
    return(
        <div className="profile-row">
            <Card /> {}
            <div className="pokemon">
                <p>Name: Gengar</p>
                <p>Level: 99</p>
                <p>Gender: Male</p>
                <p>Pokémon: Yes</p>
                <p>Location: Old Chateau</p>
            </div>
        </div>
    );
}

export default Pokemon