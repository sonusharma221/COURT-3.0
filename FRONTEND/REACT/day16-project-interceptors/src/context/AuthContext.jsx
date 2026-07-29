import { createContext, useState } from "react";

export const Auth = createContext();

const safeLocalParse = (key, fallback = null) => {
  try {
    const value = localStorage.getItem(key);
    if (value === null || value === undefined) return fallback;
    if (value === "undefined" || value === "null") return fallback;
    return JSON.parse(value);
  } catch (err) {
    return fallback;
  }
};

export const AuthProvider = ({ children }) => {
  const [registerUsers, setRegisterUsers] = useState(
    safeLocalParse("registeredUser", [])
  );
  const [logggedInUser, setLogggedInUser] = useState(
    safeLocalParse("logggedInUser", null)
  );

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
      {children}
    </Auth.Provider>
  );
};
