import React, { createContext, useContext, useReducer } from "react";

// Prepare a data layer
export const StateContext = createContext();

// wrap our app component and provide a data layer anywhere needed
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
// pull the info from the data layer
export const useStateValue = () => useContext(StateContext);
