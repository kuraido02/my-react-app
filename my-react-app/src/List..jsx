

function List() {

    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "banana", calories: 105}, 
                    {id: 3, name: "coconut", calories: 159}, 
                    {id: 4, name: "pineapple", calories: 37}];

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

    return(<ul>{listItems}</ul>);
}

export default List