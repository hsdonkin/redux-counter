import { increment, decrement } from './../actions';

// a reducer is just a basic function holding a big conditional that determines what happens to state for each action that comes in
// an action is basically just an object with a type and sometimes payload
// whatever is returned in each case needs to be the update piece of state
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
