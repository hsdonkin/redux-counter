// a reducer is just a basic function holding a big conditional that determines what happens to state for each action that comes in
// an action is basically just an object with a type and sometimes payload
// whatever is returned in each case needs to be the update piece of state
function counterReducer(state = { number: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1 };
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return { number: state.number };
  }
}
export default counterReducer;
