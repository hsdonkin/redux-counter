function isLoggedIn(state = { isLoggedIn: false }, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { isLoggedIn: true };
      break;
    case 'LOG_OUT':
      return { isLoggedIn: false };
      break;
    default:
      return { isLoggedIn: state.isLoggedIn };
      break;
  }
}

export default isLoggedIn;
