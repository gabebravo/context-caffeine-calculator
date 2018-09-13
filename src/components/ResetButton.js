import React, { Component } from 'react'
import {AppContext} from '../context/AppProvider'
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
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

class ResetButton extends Component {
  render() {
    const { classes } = this.props
    return (
      <AppContext.Consumer>
        { context => (
          <Button variant="contained" onClick={() => context.resetApp()}
            className={classes.button}>
            RESET
          </Button>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withStyles(styles)(ResetButton)
