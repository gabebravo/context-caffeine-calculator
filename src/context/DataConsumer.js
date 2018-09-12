import React from 'react';
import {ThemeContext} from './AppProvider';

export default class DataConsumer extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <ThemeContext.Consumer>
        {({drinksConsumed, total, resetApp, incrementCount, decrementCount}) => {
          return React.Children.map(children, child =>
            React.cloneElement(child, {
              drinksConsumed, 
              total, 
              resetApp, 
              incrementCount, 
              decrementCount
            })
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}