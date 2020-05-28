// TODO
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryListItems={['Apples', "Cucumber", "Coffee"]}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryListItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryListItems.map(groceryListItem =>
      <GroceryListItem groceryListItem={groceryListItem} />
      )}
  </ul>
);

// var Cucumber = () => (
//   <div>Cucumber!</div>
// );

// var Apples = () => (
//   <div>Apples!</div>
// );

ReactDOM.render(<App />, document.getElementById("app"));