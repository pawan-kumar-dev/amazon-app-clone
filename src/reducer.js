//creating a data layer

export const initialState = {
  basket: [],
  user: null,
};

//creating selector
export const getBasketTotal = (basket) => {
  const reducers = (amount, item) => Number(item.price) + amount;
  return basket?.reduce(reducers, 0);
};

export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, actions.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === actions.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1); //cutting the array from the index by 1
      } else {
        console.warn(
          "Can't remove product " + actions.id + " as its not in basket"
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: actions.user,
      };
    default:
      return state;
  }
};
