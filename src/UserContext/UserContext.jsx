import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
//   Create user 
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Log In User
  const userLogIn =(email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google LogIn
 const googleSignUp = () => {
    return signInWithPopup(auth, provider)
 }

//Github Login
const UserLogInGitHub = ()=> {
return signInWithPopup(auth, gitProvider)
}

//Log Out 
const logOutUser = ()=> {
    return signOut(auth)
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
  const value = { auth, user, createUser, logOutUser, userLogIn, googleSignUp, UserLogInGitHub };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
