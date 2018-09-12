import React, { Component } from "react";
import {AppContext} from '../context/AppProvider';
import { withStyles } from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    width: "80%",
    margin: 'auto',
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    minHeight: '4rem'
  },
  drinkSub: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    minHeight: '4rem',
    backgroundColor: green[400],
    color: '#fff',
    fontSize: '1.7rem',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
    }
  },
  stopSub: {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    minHeight: '4rem',
    backgroundColor: red[400],
    color: '#fff',
    fontSize: '1.7rem',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
    }
  },
  icon: {
    fontSize: '2.5rem'
  },
  listTextBox: {
    width: '30%'
  },
  selected: {
    fontSize: '1.25rem',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
    }
  }
});

class ResultList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <List className={classes.list}>
        <AppContext.Consumer>
        { context => (
          <ListSubheader className={context.state.total > 500 ? classes.stopSub : classes.drinkSub }>
            <span>Drink On</span>
            <span>{`Total Caffiene: ${context.state.total}`}</span>
          </ListSubheader>
          // {defaultItems.map( (item, index) => (
          //   <ListItem key={`item-${index}-${item}`} divider className={classes.listItem}>
          //     <ListItemText className={classes.listTextBox} classes={{ primary: this.props.classes.selected }} primary={item.name} />
          //     <ListItemText className={classes.listTextBox} classes={{ primary: this.props.classes.selected }} primary={`consumed: ${drinkResults[item.name]}`} />
          //     <ListItemText className={classes.listTextBox} classes={{ primary: this.props.classes.selected }} primary={`allowed: ${calculateDrinks(item.name)}`} />
          //   </ListItem>
          // ))}
        )}
        </AppContext.Consumer>
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(ResultList);
