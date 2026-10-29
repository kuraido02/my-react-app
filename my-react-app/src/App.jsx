import Card from './Card.jsx'
import Button  from './Button.jsx'
import Pokemon from './Pokemon.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';

function App() {

  const pokeData = [
                  {id: 1, name: "Type",    data: "Ghost/ Poison"}, 
                  {id: 2, name: "Species", data: "Shadow Pokémon"}, 
                  {id: 3, name: "Height", data: "1.5 m"}, 
                  {id: 4, name: "Weight", data: "40.5 kg"},
                  {id: 5, name: "Abilities", data: "Cursed Body"}];

  const moves = [
                      {id: 6, name: "Dark Pulse", data: "Dark, 80"}, 
                      {id: 7, name: "Shadow Ball", data: "Ghost, 80"}, 
                      {id: 8, name: "Sludge Wave", data: "Poison, 95"}, 
                      {id: 9, name: "Phantom Force", data: "Ghost, 90"}];

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Gengar"/>
      <Pokemon name="Gengar" age={99} isPokemon={true}/>
      {pokeData.length > 0 && <List items={pokeData} category="Pokémon Data" />}
      {moves.length > 0 && <List items={moves} category="Powerful Moves" />}
      <Button/>
      <MyComponent/>
      <Counter/>
    </>
  );
}

export default App
