import React, { createContext } from "react";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const user = { name: "nafiz", id : 20 }

  const value = { user };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
