// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryListItem={['Apples', "Cucumber", "Coffee"]}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    <li>{props.groceryListItem[0]}</li>
    <li>{props.groceryListItem[1]}</li>
    <li>{props.groceryListItem[2]}</li>
  </ul>
);

// var Cucumber = () => (
//   <div>Cucumber!</div>
// );

// var Apples = () => (
//   <div>Apples!</div>
// );

ReactDOM.render(<App />, document.getElementById("app"));