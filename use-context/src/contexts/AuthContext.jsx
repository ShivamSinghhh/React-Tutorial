import { createContext, useState } from "react";

// step-1 creating Context
export const AuthContext = createContext();
// Reacts provide  us with Provider Component
// AuthContext.Provider

export default function AuthContextProvider({ children }) {
  console.log("AuthContext is", AuthContext);
  // step -2  Providing context values
  const [isAuth,setIsAuth]= useState(false)
  const logIn =()=>{setIsAuth(true)}
  const logOut =()=>{setIsAuth(false)}
  return (
    <AuthContext.Provider value={{isAuth,logIn,logOut}}>
      {children}
    </AuthContext.Provider>
  );
}
