import profilePic from './image/gengar.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="gengar profile"></img>
            <h2 className='card-title'>Gengar</h2>
            <p className='card-text'>Gengar is a Ghost/Poison type Pokémon introduced in Generation 1. It is known as the Shadow Pokémon.</p>
        </div>
    );
}

export default Card