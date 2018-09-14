import React, { Component } from "react";
import {AppContext} from '../context/AppProvider';
import { withStyles } from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import grey from '@material-ui/core/colors/grey';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    width: "80%",
    margin: 'auto'
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    minHeight: '4rem'
  },
  subheader: {
    alignItems: 'center',
    display: 'flex',
    backgroundColor: grey[400],
    color: '#fff',
    fontSize: '1.7rem',
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.2rem',
    },
    minHeight: '4rem'
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

class DrinkList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <List className={classes.list}>
          <ListSubheader disableSticky className={classes.subheader}>Caffeine Calculator</ListSubheader>
          <AppContext.Consumer>
          { context => (
            context.state.defaultItems.map( (item, index) => (
              <ListItem key={`item-${index}-${item}`} divider className={classes.listItem}>
                <ListItemText className={classes.listTextBox} classes={{ primary: this.props.classes.selected }} primary={item.name} />
                <ListItemText className={classes.listTextBox} classes={{ primary: this.props.classes.selected }} primary={`Caffeine: ${item.quantity}`} />
                <Icon className={classes.icon} color="primary"
                  onClick={() => context.incrementCount(item.name)}>
                  add_box
                </Icon>
                <Icon className={classes.icon} color="secondary"
                  onClick={() => context.decrementCount(item.name)}>
                  indeterminate_check_box
                </Icon>
              </ListItem>
            )))
          }
          </AppContext.Consumer>
        </List>
      </Paper>
    );
  }
}

export default withStyles(styles)(DrinkList);
