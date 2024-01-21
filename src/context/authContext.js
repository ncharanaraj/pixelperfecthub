import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  return (
    <authContext.Provider
      value={{
        isLoginForm,
        setIsLoginForm,
        currentUser,
        setCurrentUser,
        token,
        setToken,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
