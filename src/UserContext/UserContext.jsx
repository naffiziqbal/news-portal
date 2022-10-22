import React, { createContext } from "react";
import app from "../Firebase/Firebase";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({ children }) => {
  const user = { name: "nafiz", id : 20 }

  
  const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const value = {auth, user, createUser };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
