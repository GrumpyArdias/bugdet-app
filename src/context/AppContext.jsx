import { createContext, useReducer } from "react";

//Reducer se encarga crear el nuevo estado en base a las acciones que recibe
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 5000,
  expenses: [
    {
      id: 12,
      name: "compras",
      cost: 30,
    },
    {
      id: 15,
      name: "comida",
      cost: 15,
    },
  ],
};

export const AppContext = createContext();

export function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
