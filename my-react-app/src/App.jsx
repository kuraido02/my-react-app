import Card from './Card.jsx'
import Button  from './Button.jsx'
import Pokemon from './Pokemon.jsx';

function App() {

  return(
    <>
      <Card/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <Button/>
    </>
  );
}

export default App
