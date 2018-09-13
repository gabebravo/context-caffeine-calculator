import React, { Component } from 'react'
import {AppContext} from '../context/AppProvider'
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar';
// import Slide from '@material-ui/core/Slide';

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
          <React.Fragment>
            <Button variant="contained" onClick={() => context.resetApp()}
              className={classes.button}>
              RESET
            </Button>
            <Snackbar
              open={context.state.snack.show}
              autoHideDuration={1500}
              onClose={() => context.resetSnack()}
              /* TransitionComponent={this.state.Transition}
                <Slide {...props} direction="down" /> */
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={
                <span id="message-id">{context.state.snack.text}</span>
              }
            />
          </React.Fragment>
        )}
      </AppContext.Consumer>
    )
  }
}

export default withStyles(styles)(ResetButton)
