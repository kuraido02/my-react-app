import Card from './Card.jsx'
import Button  from './Button.jsx'
import Pokemon from './Pokemon.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List..jsx';

function App() {

  const fruits = [{id: 1, name: "apple",    calories: 95}, 
                  {id: 2, name: "banana", calories: 105}, 
                  {id: 3, name: "coconut", calories: 159}, 
                  {id: 4, name: "pineapple", calories: 37},
                  {id: 5, name: "orange", calories: 45}];

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Gengar"/>
      <Card/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <List items={fruits} category="Fruits" />
      <Button/>
    </>
  );
}

export default App
