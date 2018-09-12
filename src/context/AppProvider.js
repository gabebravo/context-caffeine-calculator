import React, { Component } from 'react';

const DEFAULT_STATE = { 
  defaultItems: [
    { name: 'Monster Ultra Sunrise', quantity: 150 },
    { name: 'Black Coffee', quantity: 95 }, 
    { name: 'Americano', quantity: 77 }, 
    { name: 'Sugar free NOS', quantity: 260 }, 
    { name: '5 Hour Energy', quantity: 200 }
  ],
  drinksConsumed: {
    'Monster Ultra Sunrise': 0, 
    'Black Coffee': 0, 
    'Americano': 0, 
    'Sugar free NOS': 0, 
    '5 Hour Energy': 0 
  }, 
  total: 0
}

// first we will make a new context
export const AppContext = React.createContext(DEFAULT_STATE);

// Then create a provider Component
class AppProvider extends Component {
  state = DEFAULT_STATE

  getQuantity = drink => {
    const [foundDrink] = [...this.state.defaultItems].filter( item => item.name === drink)
    return foundDrink.quantity;
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,

        resetApp: () => {
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
        },
      
        incrementCount: drink => {
          const newDrinkState = 
          Object.assign({...this.state.drinksConsumed }, { [drink]: this.state.drinksConsumed[drink] += 1 })
          this.setState({ drinksConsumed: newDrinkState, total: this.state.total + this.getQuantity(drink) });
        },
      
        decrementCount: drink => {
          if( this.state.drinksConsumed[drink] > 0 ) {
            const newDrinkState = 
            Object.assign({...this.state.drinksConsumed }, { [drink]: this.state.drinksConsumed[drink] -= 1 })
            this.setState({ drinksConsumed: newDrinkState, total: this.state.total - this.getQuantity(drink) });
          }
        }
      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider