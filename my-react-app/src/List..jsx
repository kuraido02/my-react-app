

function List() {

    const fruits = ["apple", "banana", "coconut", "pineapple"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ul>{listItems}</ul>);
}

export default List