import profilePic from './image/gengar.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="gengar profile"></img>
            <h2>Gengar</h2>
            <p>A dark ghost and a cool pokemon.</p>
        </div>
    );
}

export default Card