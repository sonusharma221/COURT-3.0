import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || []
  );
  const [logggedInUser, setLogggedInUser] = useState(JSON.parse(localStorage.getItem('logggedInUser')));
  console.log("registerd user", registerUsers);
  console.log("loggedin user", logggedInUser);

  return (
    <Auth.Provider
      value={{
        registerUsers,
        setRegisterUsers,
        logggedInUser,
        setLogggedInUser,
      }}
    >
      {" "}
      {children}{" "}
    </Auth.Provider>
  );
};
