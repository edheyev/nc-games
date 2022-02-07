import { createContext, useEffect, useState } from "react";
import { storageAvailable } from "../utils/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user") && !user.user) {
      setUser(localStorage.getItem("user"));
    }

    if (!localStorage.getItem("user")) {
      if (user.user) {
        localStorage.setItem("user", user.user);
      }
    }

    if (isLoggedIn) {
      localStorage.setItem("user", user.user);
    }
  }, [user]);

  const logout = () => {
    setUser({});
  };

  const isLoggedIn = !!user.user;

  return (
    <UserContext.Provider value={{ user, setUser, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
