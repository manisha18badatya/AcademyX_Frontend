
import React, { createContext, useState, useContext, useEffect} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  useEffect(()=>{
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
     if (storedLoginStatus === "true") {
    setIsLoggedIn(true);  // Update the state based on the value in localStorage
  }
  
  },[])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);
