// actions declare what you want to do
// each action has a type property, and can contain a payload property as well
export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const logIn = () => {
  type: 'LOG_IN';
};

export const logOut = () => {
  type: 'LOG_OUT';
};
