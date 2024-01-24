import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../backend/client";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const getAccessToken = async () => {
    const { data, error } = await supabase.auth.getSession();
    setToken(data.session?.access_token);

    if (error) return error;
  };

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setCurrentUser(user);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    setToken(null);
    setCurrentUser(null);
    navigate("/");
    if (error) return console.error(error);
  };

  useEffect(() => {
    getAccessToken();
    getUser();
  }, []);

  return (
    <authContext.Provider
      value={{
        isLoginForm,
        setIsLoginForm,
        token,
        setToken,
        currentUser,
        setCurrentUser,
        handleLogout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
