import React from 'react';
import { createStore } from 'redux';

// no braces here!!! it broke with them because {} specifies not the "default export" for something

import rootReducer from './reducers/';
import { increment, decrement } from './actions';

// create the store from Redux, and pass in the reducer we made
const store = createStore(rootReducer);
// any time the store changes, log it in the console
store.subscribe(() => console.log(store.getState()));

class App extends React.Component {
  handleClick = () => {
    event.preventDefault();
    switch (event.target.name) {
      case 'increment':
        // send the function increment from actions to dispatch with any arguments
        store.dispatch(increment());
        break;
      case 'decrement':
        // send the function decrement from actions to dispatch with any arguments
        store.dispatch(decrement());
        break;
    }
  };

  render() {
    return (
      <div>
        <h1>App is working</h1>
        <button name="increment" onClick={this.handleClick}>
          +
        </button>
        <button name="decrement" onClick={this.handleClick}>
          -{' '}
        </button>
      </div>
    );
  }
}

export default App;
