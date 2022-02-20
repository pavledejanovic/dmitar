import React, { useState } from "react";

const StateContext = React.createContext();

const StateProvider = ({ children }) => {
  const state = JSON.parse(window.localStorage.getItem("state")) || [{}];
  const [inputs, dispatch] = useState(state);

  return (
    <StateContext.Provider value={[inputs, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};
export { StateContext, StateProvider };
