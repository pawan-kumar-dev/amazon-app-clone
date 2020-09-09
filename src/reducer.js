//creating a data layer

export const initialState = {
  basket: [],
};

export const reducer = (state = initialState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, actions.item],
      };
    default:
      return state;
  }
};
