import React, { Component, Fragment } from 'react'
import AppProvider from './context/AppProvider'
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

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppProvider>
        <div className={classes.root}>
          <CssBaseline />
          <Grid container spacing={16}>
            <Grid item sm={12} md={6}>
              <DrinkList />
            </Grid>
            <Grid item sm={12} md={6}>
              <ResultList />
            </Grid>
          </Grid>
          {/* <Button variant="contained" onClick={() => this.resetApp()}
            className={classes.button}>
            RESET
          </Button> */}
        </div>
      </AppProvider>
    );
  }
}

export default withStyles(styles)(App);
