import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
//import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = React.createContext();
//const [user] = useAuthState(auth);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) history.push("/chats");
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
