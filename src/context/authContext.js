import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const sessionStorageToken = JSON.parse(
    sessionStorage.getItem("loginDetails")
  );
  const [token, setToken] = useState(
    sessionStorageToken?.session?.access_token || ""
  );
  const [user, setUser] = useState(sessionStorageToken?.user);

  return (
    <authContext.Provider
      value={{
        isLoginForm,
        setIsLoginForm,
        token,
        setToken,
        user,
        setUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
