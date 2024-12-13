import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [header, setHeader] = useState(true);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        header,
        setHeader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
