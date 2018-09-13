import React, { Component } from 'react'
import AppProvider from './context/AppProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import DrinkList from './components/DrinkList'
import ResultList from './components/ResultList'
import Grid from '@material-ui/core/Grid'
import ResetButton from './components/ResetButton'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '1rem'
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
          <ResetButton />
        </div>
      </AppProvider>
    );
  }
}

export default withStyles(styles)(App);
