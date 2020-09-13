import React, { createContext, useState, Context } from "react";
import { User } from "../interfaces/interfaces";

interface Props {
  children: React.ReactNode;
}

const AppContext: Context<any> = createContext(undefined);

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<User | {}>({});

  // @ts-ignore
  const loggedInUsername = loggedInUser.displayName?.split(" ")[0];

  const getUserFromLS = () => {
    const user = JSON.parse(localStorage.loggedInUser);
    setLoggedInUser(user);
  };

  return (
    <AppContext.Provider value={{ loggedInUser, loggedInUsername, getUserFromLS }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };