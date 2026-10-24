import Card from './Card.jsx'
import Button  from './Button.jsx'
import Pokemon from './Pokemon.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List..jsx';

function App() {

  const fruits = [
                  {id: 1, name: "apple",    calories: 95}, 
                  {id: 2, name: "banana", calories: 105}, 
                  {id: 3, name: "coconut", calories: 159}, 
                  {id: 4, name: "pineapple", calories: 37},
                  {id: 5, name: "orange", calories: 45}];

  const vegetables = [
                      {id: 6, name: "potatoes", calories: 110}, 
                      {id: 7, name: "carrots", calories: 25}, 
                      {id: 8, name: "pumpkin", calories: 100}, 
                      {id: 9, name: "corn", calories: 63},
                      {id: 10, name: "broccoli", calories: 50}];

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Gengar"/>
      <Card/>
      <Pokemon name="Gengar" age={250} isPokemon={true}/>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
      <Button/>
    </>
  );
}

export default App
