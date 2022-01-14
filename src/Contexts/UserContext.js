import { createContext, useEffect, useState } from "react";
import { storageAvailable } from "../utils/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user") && !user.user) {
      console.log(
        "setting user from storage...",
        localStorage.getItem("user"),
        isLoggedIn
      );
      setUser(localStorage.getItem("user"));
    }

    if (!localStorage.getItem("user")) {
      console.log("no user in storage");
      if (user.user) {
        localStorage.setItem("user", user.user);
        console.log("in storage", localStorage.getItem("user"));
      }
    }

    if (isLoggedIn) {
      console.log(" new login, saving user", user.user);
      localStorage.setItem("user", user.user);
      console.log("in storage", localStorage.getItem("user"));
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
