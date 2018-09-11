import React, { Component, Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import DrinkList from './components/DrinkList'
import ResultList from './components/ResultList'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem'
  },
  button: {
    backgroundColor: grey[400],
    color: '#fff',
    marginTop: '1rem',
    marginLeft: '4rem',
    [theme.breakpoints.only('xs')]: {
      marginLeft: '2rem',
    }
  }
});

const defaultItems = [
  { name: 'Monster Ultra Sunrise', quantity: 150 },
  { name: 'Black Coffee', quantity: 95 }, 
  { name: 'Americano', quantity: 77 }, 
  { name: 'Sugar free NOS', quantity: 260 }, 
  { name: '5 Hour Energy', quantity: 200 }
]

class App extends Component {
  constructor() {
    super();
    this.state = { 
      drinksConsumed: {
        'Monster Ultra Sunrise': 0, 
        'Black Coffee': 0, 
        'Americano': 0, 
        'Sugar free NOS': 0, 
        '5 Hour Energy': 0 
      }, 
      total: 0
    };
  }

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

  calculateAllowed = drink => {
    const [foundDrink] = defaultItems.filter( item => item.name === drink)
    const allowedQty = Math.floor( ( 500 - this.state.total ) / foundDrink.quantity);
    return allowedQty < 0 ? 0 : allowedQty; 
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container spacing={16}>
          <Grid item sm={12} md={6}>
            <DrinkList incrementHandler={this.incrementCount} 
              decrementHandler={this.decrementCount} />
          </Grid>
          <Grid item sm={12} md={6}>
            <ResultList drinkResults={this.state.drinksConsumed}
              totalCaffiene={this.state.total} calculateDrinks={this.calculateAllowed} />
          </Grid>
        </Grid>
        <Button variant="contained" onClick={() => this.resetApp()}
          className={classes.button}>
          RESET
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
