import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { current } from "daisyui/src/colors";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

//   Create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Log In User
  const userLogIn =(email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google LogIn

//Github Login

//Log Out 
const logOutUser = ()=> {
    signOut(auth)
}




useEffect(() =>{
   const unsubscribe =  onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);

    })
    return ()=> {
        unsubscribe()
    }
},[])


  //  Context Value =======
  // ============
  const value = { auth, user, createUser, logOutUser, userLogIn };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
