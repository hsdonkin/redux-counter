function isLoggedIn(state = false, action) {
  switch (action.type) {
    case 'LOG_IN':
      return true;
      break;
    case 'LOG_OUT':
      return false;
      break;
    default:
      return state;
      break;
  }
}

export default isLoggedIn;
