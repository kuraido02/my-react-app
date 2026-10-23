import Card from './Card.jsx'
import Button  from './Button.jsx'
import Pokemon from './Pokemon.jsx';
import UserGreeting from './UserGreeting.jsx';

function App() {

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Gengar"/>
      <Card/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <Button/>
    </>
  );
}

export default App
