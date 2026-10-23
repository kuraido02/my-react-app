import Card from './Card.jsx'
import Button  from './Button.jsx'
import Pokemon from './Pokemon.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List..jsx';

function App() {

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Gengar"/>
      <Card/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <List/>
      <Button/>
    </>
  );
}

export default App
