import React from 'react';

const defaultItems = [
  { name: 'Monster Ultra Sunrise', quantity: 150 },
  { name: 'Black Coffee', quantity: 95 }, 
  { name: 'Americano', quantity: 77 }, 
  { name: 'Sugar free NOS', quantity: 260 }, 
  { name: '5 Hour Energy', quantity: 200 }
]

const DEFAULT_STATE = { 
  drinksConsumed: {
    'Monster Ultra Sunrise': 0, 
    'Black Coffee': 0, 
    'Americano': 0, 
    'Sugar free NOS': 0, 
    '5 Hour Energy': 0 
  }, 
  total: 0
}

export const ThemeContext = React.createContext(DEFAULT_STATE);

export default class DataProvider extends React.Component {
  state = DEFAULT_STATE;

  searchTermChanged = searchTerm => {
    this.setState({searchTerm});
  };

  resetApp = () => {
    this.setState({
      drinksConsumed: {
        'Monster Ultra Sunrise': 0, 
        'Black Coffee': 0, 
        'Americano': 0, 
        'Sugar free NOS': 0, 
        '5 Hour Energy': 0 
      }, 
      total: 0
    })
  }

  getQuantity = drink => {
    const [foundDrink] = defaultItems.filter( item => item.name === drink)
    return foundDrink.quantity;
  }

  incrementCount = drink => {
    const newDrinkState = 
    Object.assign({...this.state.drinksConsumed }, { [drink]: this.state.drinksConsumed[drink] += 1 })
    this.setState({ drinksConsumed: newDrinkState, total: this.state.total + this.getQuantity(drink) });
  }

  decrementCount = drink => {
    if( this.state.drinksConsumed[drink] > 0 ) {
      const newDrinkState = 
      Object.assign({...this.state.drinksConsumed }, { [drink]: this.state.drinksConsumed[drink] -= 1 })
      this.setState({ drinksConsumed: newDrinkState, total: this.state.total - this.getQuantity(drink) });
    }
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          resetApp: this.resetApp,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}