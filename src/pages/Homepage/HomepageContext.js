import React, { createContext, useReducer } from "react";

const initialState = {
  usersFull: [],
  usersPaginated: [],
};

// Create context
const HomepageContext = createContext({});
const { Provider } = HomepageContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "add_users_full":
      return { ...state, usersFull: action.payload };
    case "add_users_paginated":
      return {
        ...state,
        usersPaginated: [...state.usersPaginated, ...action.payload],
      };
    case "change_gender_paginated":
      return {
        ...state,
        usersPaginated: action.payload,
      };
    default:
      return state;
  }
};

// Exposes the properties of the context to the child components
const HomepageProvider = ({ children }) => {
  const [homepageState, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ homepageState, dispatch }}>{children}</Provider>;
};

export default { HomepageContext, HomepageProvider };
